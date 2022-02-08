import "./SearchResultsItem.css";

export default function SearchResultsItem({name, email}) {
    return (
        <div className="search-results-items">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}