import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    let token = getCookie("token");

    if (token) {
      fetch(process.env.NEXT_PUBLIC_API_URL + "/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((res) => res.json().then((data) => setUser(data)));
    }
  }, []);

  const logout = () => {
    deleteCookie("token");
    router.push("/login?success=Successfully logged out!");
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-neutral">
      <div className="px-4 py-6">
        <span className="w-32 h-10 rounded-lg text-accent flex items-center justify-center text-lg">
          LEARNIST
        </span>

        <nav className="flex flex-col mt-6 space-y-1">
          <a
            href=""
            className="flex items-center px-4 py-2 text-white bg-primary rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>

            <span className="ml-3 text-sm font-medium"> Dashboard </span>
          </a>

          <details className="group">
            <summary className="flex items-center px-4 py-2 text-gray-300 rounded-lg cursor-pointer hover:bg-primary hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium">
                {" "}
                Todos and Timers{" "}
              </span>

              <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav className="mt-1.5 ml-8 flex flex-col">
              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <span className="ml-3 text-sm font-medium"> To-Do&apos;s </span>
              </a>

              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="ml-3 text-sm font-medium"> Timer </span>
              </a>
            </nav>
          </details>

          <a
            href=""
            className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>

            <span className="ml-3 text-sm font-medium"> Homeworks </span>
          </a>

          <a
            href=""
            className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <span className="ml-3 text-sm font-medium"> Schedule </span>
          </a>

          <details className="group">
            <summary className="flex items-center px-4 py-2 text-gray-300 rounded-lg cursor-pointer hover:bg-primary hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Calendars </span>

              <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav className="mt-1.5 ml-8 flex flex-col">
              <a
                href="https://calendar.google.com/"
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <span className="ml-3 text-sm font-medium">
                  {" "}
                  Google Calendar{" "}
                </span>
              </a>

              <a
                href="https://office.live.com/start/Calendar.aspx"
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <span className="ml-3 text-sm font-medium">
                  {" "}
                  Outlook Calendar{" "}
                </span>
              </a>
            </nav>
          </details>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-neutral">
        <button
          onClick={logout}
          className="flex items-center p-4 bg-neutral hover:bg-accent shrink-0 text-accent hover:text-primary transition ease-in-out w-full"
        >
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://api.lorem.space/image/face?hash=esw9byff"
            alt="pfp"
          />

          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">{user?.username}</strong>

              <span> {user?.email} </span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
