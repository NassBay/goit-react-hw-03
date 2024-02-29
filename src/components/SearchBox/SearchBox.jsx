import { useId } from "react";
import css from './SearchBox.module.css';
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ value, onSearch }) => {
  const search = useId();
  return (
    <div className={css.container}>
      <label htmlFor={search}>Find contact by name</label>
      <div className={css.inputWrapper}>
        <IoSearch className={css.icon} />
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          id={search}
        />
      </div>
    </div>
  );
}
 
export default SearchBox;