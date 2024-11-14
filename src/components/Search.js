function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search breeds"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
export default Search;
