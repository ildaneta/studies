import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Bahia, BR");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location}
            onCHange={e => setLocation(e.target.value)}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
