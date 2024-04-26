import React from "react";
import style from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={style.wrapSB}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search contacts..."
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
