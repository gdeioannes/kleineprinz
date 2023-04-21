import React, { useRef, useState } from "react";
import "./App.css";
import book from "./book.json";

interface BookDic {
  Germany: string;
  English: string;
  Spanish: string;
}

function App() {
  let [searchWord, setSearchWord] = useState<BookDic[]>([]);
  let inputWord: any = useRef();

  function searchWordInJson() {
    console.log(inputWord.current.value);
    if (inputWord.current.value == "") {
      setSearchWord([]);
    } else {
      let newList: BookDic[] = [];
      book.map((word) => {
        console.log();
        if (
          word.Germany.slice(0, inputWord.current.value.length) ==
          inputWord.current.value
        ) {
          newList.push(word);
        }
      });

      setSearchWord(newList);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kleine Prinz</h1>
        <input
          ref={inputWord}
          onChange={() => {
            searchWordInJson();
          }}
          type="text"
        />

        <div>
          <h3>Word</h3>
          <ul>
            {searchWord.map((element) => {
              return (
                <>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <p>{element.Germany}</p>
                      </div>
                      <div className="flip-card-back">
                        <p>{element.English}</p>
                        <br />
                        <p>{element.Spanish}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
