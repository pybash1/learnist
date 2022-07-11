export default function Search() {
  return (
    <div className="flex flex-row items-center text-white">
      <input
        className="border-2 border-neutral bg-neutral h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      &nbsp;
      <button type="submit" className="rounded-full bg-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 m-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
