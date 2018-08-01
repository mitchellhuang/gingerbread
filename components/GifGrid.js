import React, { Component } from 'react';
import axios from 'axios';
import debounce from '../lib/debounce';

class GifGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      resp: null,
      cache: {},
    };
    this.delayedSearch = debounce(
      (query, offset, loadMore) => this.search(query, offset, loadMore),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props;
    if (prevProps.query !== query) {
      this.delayedSearch(query);
    }
  }

  async search(query, offset, loadMore) {
    if (!query) {
      // eslint-disable-next-line
      query = this.props.query;
    }
    const { results, cache } = this.state;
    if (query.length === 0) {
      this.setState({
        results: [],
        resp: null,
      });
      return;
    }
    let resp;
    const cacheKey = offset ? query + offset : query;
    if (cache[cacheKey] === undefined) {
      resp = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9',
          limit: 24,
          q: query,
          offset,
        },
      });
      cache[cacheKey] = resp;
    } else {
      resp = cache[cacheKey];
    }
    let newResults = resp.data.data;
    if (loadMore) {
      newResults = results.concat(newResults);
    }
    this.setState({
      results: newResults,
      resp: resp.data,
      cache,
    });
  }

  render() {
    const { results, resp } = this.state;
    if (results && resp) {
      return (
        <div className="mt-2">
          <div className="row no-gutters">
            {results.map((gif, i) => (
              <a
                key={gif.id + i}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                href={gif.url}
                target="_blank"
              >
                <div className="img-outer">
                  <div className="img-inner">
                    <img
                      src={gif.images.preview_gif.url}
                      alt={gif.id}
                    />
                  </div>
                </div>
              </a>
            ))}
            <style jsx>{`
              .row {
                margin: 0 -10px;
              }
              a {
                display: block;
              }
              .img-outer {
                padding: 10px;
              }
              .img-inner {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 150px;
                padding: 10px;
                border-radius: 5px;
                background-color: #efefef;
                border: 1px solid #ddd;
              }
              img {
                max-width: 100%;
                max-height: 100%;
              }
            `}</style>
          </div>
          {resp.pagination.total_count > resp.pagination.count
            + resp.pagination.offset && (
            <div className="mt-2">
              <button
                type="button"
                className="view-more"
                onClick={() => this.search(
                  null,
                  resp.pagination.count + resp.pagination.offset,
                  true,
                )}
              >
                View more
              </button>
              <style jsx>{`
                div {
                  text-align: center;
                }
                button {
                  padding: 10px 15px;
                  background-color: #efefef;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  cursor: pointer;
                  color: #333;
                  width: 100%;
                }
                button:focus {
                  outline: none;
                }
              `}</style>
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}

export default GifGrid;
