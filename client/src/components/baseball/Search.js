import React, { useState } from 'react';

// We take our props object and assign each property to it's own variable name.
// In this case we only passed one prop, `onFormSubmit`
function Search({ onFormSubmit }) {
  // Our state variable for the search term. Defaults to "microsoft/vscode".
  const [term, setTerm] = useState('search player');

  const sendTerm = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <>
      <h1>Player Search</h1>
      <span className="text-primary">
        Retrieve issues for a particular organization and repo. Example
        (search player)
      </span>
      <hr></hr>
      <div className="form-group">
        <form className="form" onSubmit={sendTerm}>
          <div className="field">
            <label style={{ marginRight: '5px' }}>Retrieve GitHub Issues</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="search player"
            />
            <button className="btn" style={{ margin: '5px' }}>
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
