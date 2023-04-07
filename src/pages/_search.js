import React, { useState, useEffect } from "react";
import { SearchResults } from "../assets/dataList";
// import "@/styles/Search.module.css";

const Search = () => {
  let newList = SearchResults.sort((a, b) => {
    if (a.clicked === b.clicked) {
      return a.search < b.search ? -1 : 1;
    } else {
      return a.clicked < b.clicked ? 1 : -1;
    }
  });

  let searchedArray = SearchResults.filter(function (el) {
    return el.clicked === true;
  });

  const [showSearch, setShowSearch] = useState("hide");
  const [searchVal, setSearchVal] = useState("");
  const [resultsList, setResultsList] = useState(searchedArray);
  const [masterList, setMasterList] = useState(newList);
  const [searching, setSearching] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [firstSearch, setFirstSearch] = useState("show");

  function searchForResults(val) {
    if (val === "") {
      setResultsList(searchedArray);
      return;
    }

    let array = [];
    let split = val.split("");

    masterList.map((result, index) => {
      let splitResult = result.search.toLowerCase().split("");
      let length = split.length;
      let current = splitResult.slice(0, length);
      if (
        current.length === split.length &&
        current.every((value, index) => value === split[index])
      ) {
        array.push(result);
      }
    });

    setResultsList([...array]);
    // setMasterList([...array]);
  }

  useEffect(() => {
    if (searchVal === "") {
      setFirstSearch("show");
    }
  });

  function addSearchItem() {
    let list = masterList;
    masterList.map((val) => {
      if (val.search === searchVal) {
        let item = {
          search: searchVal,
          clicked: true,
        };
        list.push(item);
      }
    });
    setMasterList(...list);
  }

  //need to fix this

  return (
    <div id="searchContainer">
      <div id="searchBarMain">
        <input
          type="text"
          placeholder="Search..."
          className="searchBar"
          onClick={() => {
            setShowSearch("show");
          }}
          value={searchVal}
          onChange={(e) => {
            searchForResults(e.target.value);
            setSearchVal(e.target.value);
            setFirstSearch("hide");
          }}
        />
        <button className="searchBtn" onClick={addSearchItem}>
          Go
        </button>
      </div>
      <div>
        <ul className={`searchResults ${showSearch}`}>
          <p className={firstSearch}>Related to your recent searches</p>
          {resultsList.map((val, index) => {
            return <li key={`${val.search}-li`}>{val.search}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
