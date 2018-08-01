import React from 'react';

const Search = ({
  value,
  onChange,
}) => (
  <div>
    <input
      type="text"
      placeholder="Search for gifs..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <style jsx>{`
      input {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 100%;
        outline: none;
        transition: border 200ms ease-out;
      }
      input:focus {
        border-color: #039BE5;
      }
    `}</style>
  </div>
);

export default Search;
