import SearchResultsItem from "./SearchResultsItem/SearchResultsItem";
import "./SearchResults.css";

export default function SearchResults({results, isSearching}) {
    return (
        <div className="search-results">
            {!results?.length && isSearching && <p>No hay resultados.</p>}
            {results?.map((value) => {
                // primera alternativa para pasar los value al hijo: uno por uno
                // return <SearchResultsItem key={value.id} name={value.name} email={value.email}/>

                // segunda alternativa para pasar los value al hijo: pasar todos los value (esto es buena práctica, y especialmente útil cuando los valores que queremos mostrar son muchos)
                return <SearchResultsItem key={value.id} {...value}/>
            })}
        </div>
    );
}

