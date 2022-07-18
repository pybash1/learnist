import { useRouter } from "next/router";
import { useState } from "react";

export default function CTA() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function onboard(e) {
    e.preventDefault();
    router.push("/onboarding?email="+email)
  }

  return (
    <aside className="p-12 bg-primary sm:p-16 lg:p-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-300">
          Don&apos;t get overwhelmed with your studies!
        </p>

        <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Ace them with us!
        </p>

        <form className="mt-8 sm:flex">
          <div className="sm:flex-1">
            <label htmlhtmlFor="email" className="sr-only">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.doe@yourschool.edu"
              className="w-full p-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg"
            />
          </div>

          <button
            type="button"
            onClick={onboard}
            className="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-accent rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-accent/75 transition ease-in-out"
          >
            Sign up
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
        </form>
      </div>
    </aside>
  );
}
