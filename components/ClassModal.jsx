import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";

export default function HwModal() {
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [stime, setStime] = useState("");
  const [etime, setEtime] = useState("");
  const [day, setDay] = useState("");

  const btnSubmit = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !teacher || !stime || !etime || !day) {
      toast.error("Feilds cannot be empty!");
      return;
    }

    btnSubmit.current.onClick = null;
    btnSubmit.current.onclick = null;
    btnSubmit.current.style.background = "#c4c4c4";
    btnSubmit.current.innerHTML = `Adding Class&nbsp;&nbsp;&nbsp;
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    `;

    fetch(process.env.NEXT_PUBLIC_API_URL + "/classes/update/schedule", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        name: name,
        teacher: teacher,
        day: day,
        stime: stime,
        etime: etime,
      }),
    }).then((res) =>
      res.json().then((data) => {
        window.location.href = "/schedule";
      })
    );
  }

  return (
    <section className="shadow-2xl rounded-3xl bg-primary">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#344047",
            color: "#6a97c7",
          },
        }}
      />
      <div className="p-8 text-center sm:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Add Class
        </p>
        <br />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="sr-only" htmlFor="name">
                Class Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
                placeholder="Class Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="name">
                Teacher
              </label>
              <input
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
                placeholder="Teacher"
                type="text"
                id="name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="teacher">
                Start Time
              </label>
              <input
                value={stime}
                onChange={(e) => setStime(e.target.value)}
                className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
                placeholder="Start Time"
                type="time"
                id="teacher"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="class_">
                End Time
              </label>
              <input
                value={etime}
                onChange={(e) => setEtime(e.target.value)}
                className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
                placeholder="End Time"
                type="time"
                id="class_"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="sr-only"
                id="option1"
                type="radio"
                tabIndex="-1"
              />
              {day === "monday" ? (
                <button
                  type="button"
                  onClick={() => setDay("monday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Monday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("monday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Monday </span>
                </button>
              )}
            </div>

            <div>
              <input
                className="sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
              />
              {day === "tuesday" ? (
                <button
                  type="button"
                  onClick={() => setDay("tuesday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Tuesday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("tuesday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Tuesday </span>
                </button>
              )}
            </div>
            <div>
              <input
                className="sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
              />
              {day === "wednesday" ? (
                <button
                  type="button"
                  onClick={() => setDay("wednesday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Wednesday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("wednesday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Wednesday </span>
                </button>
              )}
            </div>
            <div>
              <input
                className="sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
              />
              {day === "thursday" ? (
                <button
                  type="button"
                  onClick={() => setDay("thursday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Thursday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("thursday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Thursday </span>
                </button>
              )}
            </div>
            <div>
              <input
                className="sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
              />
              {day === "friday" ? (
                <button
                  type="button"
                  onClick={() => setDay("friday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Friday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("friday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Friday </span>
                </button>
              )}
            </div>
            <div>
              <input
                className="sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
              />
              {day === "saturday" ? (
                <button
                  type="button"
                  onClick={() => setDay("saturday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Saturday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("saturday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Saturday </span>
                </button>
              )}
            </div>
            <div className="col-span-3">
              <input
                className="sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
              />
              {day === "sunday" ? (
                <button
                  type="button"
                  onClick={() => setDay("sunday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Sunday </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDay("sunday")}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Sunday </span>
                </button>
              )}
            </div>
          </div>

          <div className="mt-4">
            <button
              ref={btnSubmit}
              type="submit"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-accent rounded-lg sm:w-auto"
            >
              <span className="font-medium"> Add Class </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </form>
      </div>
    </section>
  );
}
