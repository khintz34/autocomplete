import React, { useState, useEffect, useRef } from "react";
import { SearchResults } from "../assets/dataList";
import { capAll } from "@/assets/utils";

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
  const [masterList, setMasterList] = useState(newList);
  const [searching, setSearching] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [firstSearch, setFirstSearch] = useState("first");
  const inputRef = useRef();
  const [recentList, setRecentList] = useState(
    SearchResults.filter(function (el) {
      return el.clicked === true;
    })
  );
  const [resultsList, setResultsList] = useState(searchedArray);
  const [num, setNum] = useState(0);

  useEffect(() => {
    let list = masterList.filter(function (el) {
      return el.clicked === true;
    });
    setResultsList(
      list.sort((a, b) => {
        return a.search < b.search ? -1 : 1;
      })
    );
  }, [masterList]);

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
        current.every((value, index) => value === split[index].toLowerCase())
      ) {
        array.push(result);
      }
    });

    setResultsList([...array]);
  }

  useEffect(() => {
    if (searchVal === "") {
      setFirstSearch("first");
    }
  });

  function addSearchItem() {
    let list = masterList;
    let found = false;
    list.map((val, index) => {
      if (val.search.toLowerCase() === searchVal.toLowerCase()) {
        found = true;
        inputRef.current.value = "";
        setFirstSearch("show");
        list[index].clicked = true;
        setMasterList([...list]);
        return;
      }
    });
    if (!found) {
      let item = {
        search: capAll(searchVal),
        clicked: true,
      };
      list.push(item);
    }
    inputRef.current.value = "";
    setMasterList([...list]);
    setFirstSearch("first");
    setShowSearch("hide");
  }

  function checkClick(e) {
    let name = e.target.className;
    if (
      name === "searchBar" ||
      name === "searchBtn" ||
      name === "searchList" ||
      name === "searchResults show"
    ) {
      return;
    } else {
      setShowSearch("hide");
    }
  }

  function handleKeydown(e) {
    setShowSearch("show");
    let activeNum = num;
    if (e.key === "ArrowDown") {
      setNum((index) => Math.min(resultsList.length - 1, index + 1));
      if (num !== resultsList.length - 1) {
        activeNum += 1;
      }
      setSearchVal(resultsList[activeNum].search);
    } else if (event.key === "ArrowUp") {
      setNum((index) => Math.max(0, index - 1));
      if (num !== 0) {
        activeNum -= 1;
      }
      setSearchVal(resultsList[activeNum].search);
    } else if (e.key === "Enter") {
      addSearchItem();
    }
  }

  return (
    <div id="searchContainer" onClick={checkClick} onKeyDown={handleKeydown}>
      <div className={`searchBarMain ${showSearch}`}>
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
            setFirstSearch("second");
          }}
          ref={inputRef}
        />
        <div className={`searchResults `}>
          <ul className="searchUL">
            <p className={firstSearch}>Related to your recent searches</p>
            {resultsList.map((val, index) => {
              return (
                <li
                  key={`${val.search}-li`}
                  //   className="searchList"
                  className={
                    num === index ? "searchList selected" : "searchList"
                  }
                  onClick={(e) => {
                    setSearchVal(val.search);
                    setShowSearch("hide");
                  }}
                >
                  {val.search}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <button className="searchBtn" onClick={addSearchItem}>
        Go
      </button>
    </div>
  );
};

export default Search;
