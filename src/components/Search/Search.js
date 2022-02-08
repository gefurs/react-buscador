import {useState} from "react";
import SearchBox from "./SearchBox/SearchBox";
import SearchResults from "./SearchResults/SearchResults";
import data from "../../data/users.json";
import "./Search.css";

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [usersData] = useState(data);
    const [results, setResults] = useState([]);

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        // 1 - validamos que no se compare con un campo vacío o indefinido (length > 0)
        // 2 - iteramos el json para obtener un valor (value) de cada uno de los índices (por ejemplo el nombre), para ello usamos "filter(value)"
        // 3 - luego comparamos este value.name con lo que el usuario ingresó en el input con "includes()"
        // 4 - debemos incluir una línea de código por cáda comparación, ya que buscamos por name, username, phone y email
        // 5 - con "toLowerCase()" solucionamos el problema de si el usuario ingresa valores en minúsculas, además creamos una constante dentro de la función que transforme searchText en minúsculas

        if (usersData?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = usersData.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.username.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) || 
                    value.phone.toLowerCase().includes(searchTextMinus)
                );
            });
            // 6 - esta información obtenida con el filteredData la guardamos en una constante de estado que contiene un array vacío, a fin de poder luego usar este array con el componente SearchResults
            setResults(filteredData);
        }
    };

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    };

    return (
        <div className={`search ${isAtTop ? "search-top" : "search-center"} `}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
}