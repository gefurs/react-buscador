import {useState, useEffect} from "react";
import SearchBox from "./SearchBox/SearchBox";
import SearchResults from "./SearchResults/SearchResults";
import "./Search.css";

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [usersData, setUserData] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            });
        };
        getUsers().catch(null);
    }, []);

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
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