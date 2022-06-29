import Image from "next/image";

export default function Navbar() {
  return (
    <header className="shadow-sm bg-neutral">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <div className="text-accent">LEARNIST</div>
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            <a className="text-white hover:text-accent transition ease-in-out" href="">
              About
            </a>
            <a className="text-white hover:text-accent transition ease-in-out" href="">
              Blog
            </a>
            <a className="text-white hover:text-accent transition ease-in-out" href="">
              Projects
            </a>
            <a className="text-white hover:text-accent transition ease-in-out" href="">
              Contact
            </a>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a
              className="px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-gray-500 transition ease-in-out rounded-lg"
              href=""
            >
              Log in
            </a>

            <a
              className="px-5 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/75 transition ease-in-out rounded-lg"
              href=""
            >
              Sign up
            </a>
          </div>

          <div className="lg:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
