import { Search as SearchIcon } from "lucide-react"

import '../styles/search.css'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Buscar por ID, Cliente o Proyecto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default Search;