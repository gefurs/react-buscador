import {useState} from "react";
import "./SearchBox.css";

export default function SearchBox({onSearch, onClose, isSearching}) {
    const [searchText, setSearchText] = useState("");

    const handleClearInputClick = () => {
        setSearchText("");
        onClose();
    }

    return (
        <div className="search-box">
            <h2 className="search-box-title">Buscador de personal</h2>
            <div className="search-box-searcher">
                <label>
                    <input value={searchText} onChange={ ({target: {value}}) => setSearchText(value)} className="search-box-input" />
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length} className="search-box-button-buscar" >Buscar</button>
                {isSearching && <button onClick={handleClearInputClick} disabled={!searchText.length} className="search-box-button-cerrar" >Cerrar</button>}
            </div>
        </div>
    );
}