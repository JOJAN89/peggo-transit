type RouteSearchProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

function RouteSearch({
  searchTerm,
  setSearchTerm,
}: RouteSearchProps) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="route-search">Search Routes</label>

      <input
        id="route-search"
        type="text"
        value={searchTerm}
        placeholder="Enter route number or name"
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm("")}
        >
          Clear Search
        </button>
      )}
    </form>
  );
}

export default RouteSearch;