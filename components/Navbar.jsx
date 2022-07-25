import Link from "next/link";

export default function Navbar() {
  return (
    <header className="shadow-sm bg-neutral">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/"><a className="text-accent"><img src="/logo.png" width="100" height="100" /></a></Link>
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            <Link href="/#features">
              <a className="text-white hover:text-accent transition ease-in-out">
                Features
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-white hover:text-accent transition ease-in-out">
                Pricing
              </a>
            </Link>
            <a href="https://github.com/ax-a-dev" target="blank_" className="text-white hover:text-accent transition ease-in-out">
              About
            </a>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <Link href="/login">
              <a className="px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-gray-500 transition ease-in-out rounded-lg">
                Log in
              </a>
            </Link>

            <Link href="/onboarding?plan=0">
              <a className="px-5 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/75 transition ease-in-out rounded-lg">
                Sign up
              </a>
            </Link>
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
