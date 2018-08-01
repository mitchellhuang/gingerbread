import React, { Component } from 'react';
import Main from '../layouts/Main';
import Search from '../components/Search';
import GifGrid from '../components/GifGrid';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  onChange(value) {
    this.setState({
      query: value,
    });
  }

  render() {
    const { query } = this.state;
    return (
      <Main title="Gingerbread">
        <div className="container">
          <div className="content">
            <div className="tagline">Find your favorite gif.</div>
            <Search
              value={query}
              onChange={value => this.onChange(value)}
            />
          </div>
          <GifGrid query={query} />
        </div>
        <style jsx>{`
          .content {
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
          }
          .tagline {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 15px;
          }
          @media (min-width: 768px) {
            .content {
              max-width: 500px;
            }
          }
        `}</style>
      </Main>
    );
  }
}

export default Index;
