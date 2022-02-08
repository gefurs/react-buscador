import SearchResultsItem from "./SearchResultsItem/SearchResultsItem";
import "./SearchResults.css";

export default function SearchResults({results, isSearching}) {
    return (
        <div className="search-results">
            {!results?.length && isSearching && <p>No hay resultados.</p>}
            {results?.map((value) => {
                return <SearchResultsItem key={value.id} {...value}/>
            })}
        </div>
    );
}

