import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    // not to reload a page
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {/* Results --> component name + property name + property value  */}
        <Results results={results} />
      </div>
    </div>
  );
}
