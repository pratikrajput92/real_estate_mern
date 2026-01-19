
const SearchMap = () => {
  return (
    <div className="h-full w-full">
      <iframe
        src="https://www.google.com/maps?q=Santa%20Monica&output=embed"
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default SearchMap;
