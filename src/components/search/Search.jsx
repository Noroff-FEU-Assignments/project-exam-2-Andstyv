import { useState } from "react";
import { Link } from "react-router-dom";

export function Search({ placeholder, data }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchQuery(searchInput);

    const searchFilter = data.filter((value) => {
      console.log(value);
      return value.attributes.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    if (searchInput === "") {
      setFilteredResults([]);
    } else {
      setFilteredResults(searchFilter);
    }
  };

  //   const clearInput = () => {
  //     setFilteredResults([]);
  //     setSearchQuery("");
  //   };

  return (
    <div>
      <div>
        <input type={"text"} placeholder={placeholder} value={searchQuery} onChange={handleSearch} />
      </div>
      <div>
        {filteredResults.slice(0, 10).map((value, key) => {
          return (
            <li key={value.id}>
              <Link to={`accommodation/${value.attributes.title}`}>{value.attributes.title}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
