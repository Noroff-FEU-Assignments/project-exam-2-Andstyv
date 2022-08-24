import { useState } from "react";

export function Search({ placeholder, data }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchQuery(searchInput);

    const searchFilter = data.filter((value) => {
      return value.attributes.name.toLowerCase().includes(searchInput.toLowerCase());
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
            <a href={value.attributes.name}>
              <p>{value.attributes.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
