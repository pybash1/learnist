export default function Empty() {
  return (
    <div className="p-10 flex items-center justify-center">
      <div className="relative p-8 text-center  bg-neutral rounded-lg">
        <h2 className="text-2xl font-medium text-accent">There&apos;s nothing here...</h2>

        <p className="mt-4 text-sm text-gray-400">
          Added/assigned homeworks will appear here, try adding one!
        </p>

        <button
          onClick={props.onClick}
          className="inline-flex items-center px-5 py-3 mt-8 font-medium text-gray-100 bg-accent rounded-lg hover:bg-accent/75 transition ease-in-out"
        >
          Add homework
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-shrink-0 w-4 h-4 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
