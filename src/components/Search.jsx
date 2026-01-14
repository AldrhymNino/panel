import { Search as SearchIcon } from "lucide-react"

import '../styles/search.css'

const Search = ({searchTerm, setSearchTerm, placeholder}) => {
    return (
        <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default Search;