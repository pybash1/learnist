import { format, compareAsc } from "date-fns";
import Link from "next/link";
import { useState } from "react";

export default function Homework(props) {
  const [today, setToday] = useState(false);

  if (props.date.getDate() === new Date().getDate()) {
    setToday(true);
  }

  return (
    <article className="p-1 shadow-xl rounded-2xl hover:shadow-2xl transition-all ease-in-out">
      <Link href={"/homework/" + props?.id}>
        <a className="flex flex-col justify-end h-full p-6 bg-neutral sm:p-8 rounded-xl hover:bg-opacity-90">
          <div className="mt-16">
            <p className="text-xs font-medium text-gray-500">
              {props?.description}
            </p>
            <h5 className="mt-2 text-xl font-bold text-white">{props?.name}</h5>
            <div className="flex items-center justify-between mt-6">
              <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/75">
                {format(props?.date, "MM/dd/yyyy")}
              </p>
              <ul className="flex space-x-1">
                <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-accent">
                  {props?.teacher}
                </li>
                <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-accent">
                  {props?.class}
                </li>
                {today ? (
                  <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-amber-500">
                    Due Today
                  </li>
                ) : null}
                {compareAsc(new Date(), props?.date) === 1 ? (
                  <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-red-500">
                    Overdue
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
