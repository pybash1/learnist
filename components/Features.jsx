import Link from "next/link";

export default function Features() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 ">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Ace your exams
            </h2>

            <p className="mt-4 text-gray-400">
              Not getting good grades? Having a hard time managing your
              schedule? Don&apos;t worry! We go you covered with our huge suite
              of schedule management, homeworks, tasks, teachers, grades, and
              everything!
            </p>

            <Link href="/onboarding">
              <a className="inline-flex items-center px-8 py-3 mt-8 text-white bg-accent border border-accent rounded hover:bg-accent/75 hover:border-accent/75 active:text-accent focus:outline-none focus:ring">
                <span className="text-sm font-medium"> Get Started </span>

                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block p-4 border border-neutral bg-neutral shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-500 transition-all ease-in-out"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h6 className="mt-2 font-bold text-white">Homeworks</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Automatically get homeworks assigned or manually add them.
              </p>
            </a>

            <a
              className="block p-4 border border-neutral bg-neutral shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-500 transition-all ease-in-out"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h6 className="mt-2 font-bold text-white">Classes</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Automatic reminders and class management along with grades.
              </p>
            </a>

            <a
              className="block p-4 border border-neutral bg-neutral shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-500 transition-all ease-in-out"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h6 className="mt-2 font-bold text-white">Calendar</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Integrate with Google Calendar, Outlook Calendar, etc.
              </p>
            </a>

            <a
              className="block p-4 border border-neutral bg-neutral shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-500 transition-all ease-in-out"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h6 className="mt-2 font-bold text-white">Todos and Timers</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Simple aesthetic to-do list along with pomodoro timer.
              </p>
            </a>

            <a
              className="block p-4 border border-neutral bg-neutral shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-500 transition-all ease-in-out"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h6 className="mt-2 font-bold text-white">For Teachers</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Teachers can assign students homeworks, manage classes, etc.
              </p>
            </a>

            <a
              className="block p-4 border border-neutral bg-neutral shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-500 transition-all ease-in-out"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h6 className="mt-2 font-bold text-white">Dashboard</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Get an overview of everything in one place!
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
