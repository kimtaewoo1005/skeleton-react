"use client";

import { wordSlice, selectWord, useDispatch, useSelector } from "@/stores";

export const Word = () => {
  const dispatch = useDispatch();
  const word = useSelector(selectWord);

  const handleAddWord = (payload: string) => {
    dispatch(wordSlice.actions.addWord(payload));
  };

  const handleRemove = (payload: string) => {
    dispatch(wordSlice.actions.removeWord(payload));
  };

  const handleSetWord = (payload: string) => {
    dispatch(wordSlice.actions.setWord(payload));
  };

  return (
    <div>
      <div>Word: {word}</div>
      <div>
        <input className="text-black   " type="text" onChange={(e) => handleSetWord(e.target.value)} />
        <button onClick={() => handleSetWord("")}>Reset</button>
        <button onClick={() => handleRemove(word.slice(-1))}>Remove</button>
      </div>
      <div>
        <input className="text-black   " type="text" onChange={(e) => handleAddWord(e.target.value)} />
        <button onClick={() => handleSetWord("")}>Reset</button>
        <button onClick={() => handleRemove(word.slice(-1))}>Remove</button>
      </div>
    </div>
  );
};
