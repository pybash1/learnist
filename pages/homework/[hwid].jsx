import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";
import toast, { Toaster } from "react-hot-toast";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export default function Homework({ hw }) {
  const router = useRouter();

  function deleteHomework() {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/homeworks/delete/" + hw.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+getCookie("token")
      }
    }).then((res) =>
      res.json().then((data) => {
        if (data.msg) {
          router.push("/homeworks?success=" + data.msg.charAt(0).toUpperCase()+data.msg.substr(1));
        } else {
          toast.error(data.error);
        }
      })
    );
  }

  return (
    <div className="bg-primary min-h-screen">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#344047",
            color: "#6a97c7",
          },
        }}
      />
      <div className="grid grid-cols-5 gap-2">
        <Sidebar />
        <div className="col-span-4">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">Homework</h2>
            <Search />
          </div>
          <div className="p-20">
            <article className="p-6 bg-neutral sm:p-8 rounded-xl ring ring-neutral">
              <div className="flex items-start">
                <div
                  className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-accent"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>

                <div className="sm:ml-8">
                  <strong className="rounded border border-accent bg-accent px-3 py-1.5 text-[10px] font-medium text-white">
                    Homework #{hw.id}
                  </strong>
                  &nbsp;
                  <strong className="rounded border border-accent bg-accent px-3 py-1.5 text-[10px] font-medium text-white">
                    Teacher: {hw.assigned_by}
                  </strong>
                  &nbsp;
                  <strong className="rounded border border-accent bg-accent px-3 py-1.5 text-[10px] font-medium text-white">
                    Class: {hw.class}
                  </strong>
                  <h2 className="mt-4 text-lg font-medium sm:text-xl">
                    <a href="" className="text-white">
                      {" " + hw.name + " "}
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">{hw.description}</p>
                  <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <p className="ml-1 text-xs font-medium">
                        {new Date(hw.due) === new Date()
                          ? "Today"
                          : format(new Date(hw.due), "MM/dd/yyyy")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex justify-between text-white">
                <div></div>
                <button
                  onClick={deleteHomework}
                  className="flex items-center justify-between px-2 py-1 transition-colors bg-accent border border-accent rounded-lg hover:bg-transparent group focus:outline-none focus:ring"
                >
                  <span className="font-medium text-white transition-colors group-active:text-indigo-500 group-hover:text-accent">
                    Delete Homework
                  </span>

                  <span className="flex-shrink-0 p-2 ml-4 text-accent bg-white group-hover:bg-transparent border border-current rounded-full group-active:text-indigo-500">
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

Homework.getInitialProps = async (ctx) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/homeworks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ctx.req.cookies.token,
    },
  });
  const hws = await res.json();

  let hw;
  hws.forEach((hw_) => {
    if (hw_.id.toString() === ctx.query.hwid) {
      hw = hw_;
    }
  });

  return { hw: hw };
};
