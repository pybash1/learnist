import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export default function Timeline({ classes }) {
  function isActive(stime, etime) {
    const shr = stime.toString().split(" ")[4].split(":")[0];
    const ehr = etime.toString().split(" ")[4].split(":")[0];
    const smin = stime.toString().split(" ")[4].split(":")[1];
    const emin = etime.toString().split(" ")[4].split(":")[1];
    const curhr = new Date().toString().split(" ")[4].split(":")[0];
    const curmin = new Date().toString().split(" ")[4].split(":")[1];

    const s = parseInt(shr + smin);
    const e = parseInt(ehr + emin);
    const cur = parseInt(curhr + curmin);
    if (cur >= s && cur <= e) {
      return true;
    }
    return false;
  }

  if (classes.length <= 0) {
    return (
      <div className="relative p-8 text-center border border-neutral bg-neutral rounded-lg">
        <h2 className="text-2xl font-medium text-white">No Classes Today!</h2>

        <p className="mt-4 text-sm text-gray-500">
          You don&apos;t have any classes scheduled for today! Either add a new
          class or enjoy your holiday!
        </p>

        <button className="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-accent rounded-lg hover:bg-accent/75 transition ease-in-out">
          Schedule a class
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
    );
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeline = classes?.map((class_, ind) => (
    <li className="mb-10 ml-4" key={ind}>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {format(utcToZonedTime(class_?.stime, timezone), "HH:mm")}
        {" - "}
        {format(utcToZonedTime(class_?.etime, timezone), "HH:mm")}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {class_?.name}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {class_?.teacher}
      </p>
      {isActive(class_.stime, class_.etime) ? (
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-accent rounded-lg border border-neutral hover:bg-neutral hover:text-accent focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 transition ease-in-out"
        >
          Join Class{" "}
          <svg
            className="ml-2 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      ) : null}
    </li>
  ));

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {timeline}
    </ol>
  );
}
