import { eachWeekendOfInterval, format } from "date-fns";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function HwModal() {
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [class_, setClass] = useState("");
  const [due, setDue] = useState("");
  const [description, setDescription] = useState("");

  const btnSubmit = useRef(null);

  const router = useRouter();

  function weekend() {
    const week = new Date();
    week.setDate(new Date().getDate() + 7);
    const weekends = eachWeekendOfInterval({
      start: new Date(),
      end: week,
    });
    setDue(format(weekends[0], "MM-dd-yyyy"));
  }

  function tomorrow() {
    let tmrw = new Date();
    tmrw.setDate(new Date().getDate() + 1);
    setDue(format(tmrw, "MM-dd-yyyy"));
  }

  const tmrw = new Date();
  tmrw.setDate(new Date().getDate() + 1);
  const week = new Date();
  week.setDate(new Date().getDate() + 7);
  const weekends = eachWeekendOfInterval({
    start: new Date(),
    end: week,
  });
  const weekend_ = new Date(weekends[0]);

  function updateDue(val) {
    const yr = val.split("-")[0];
    const mn = val.split("-")[1];
    const day = val.split("-")[2];
    setDue(mn + "-" + day + "-" + yr);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!name || !teacher || !class_ || !due || !description) {
      toast.error("Feilds cannot be empty!");
      return;
    }
    
    btnSubmit.current.onClick = null;
    btnSubmit.current.onclick = null;
    btnSubmit.current.style.background = "#c4c4c4";
    btnSubmit.current.innerHTML = `Adding Homework&nbsp;&nbsp;&nbsp;
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    `;

    fetch(process.env.NEXT_PUBLIC_API_URL + "/homeworks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        name: name,
        description: description,
        assigned_by: teacher,
        class_: class_,
        due: `${due.split("-")[2]}-${due.split("-")[0]}-${due.split("-")[1]}`,
      }),
    }).then((res) =>
      res.json().then((data) => {
        router.push("/homework/" + data.id);
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
          Add Homework
        </p>
        <br />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">
              Homework Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
              placeholder="Homework Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="teacher">
                Teacher
              </label>
              <input
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
                placeholder="Teacher"
                type="text"
                id="teacher"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="class_">
                Class/Subject
              </label>
              <input
                value={class_}
                onChange={(e) => setClass(e.target.value)}
                className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
                placeholder="Class/Subject"
                type="text"
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
              {due == format(tmrw, "MM-dd-yyyy") ? (
                <button
                  type="button"
                  onClick={tomorrow}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Due Tomorrow </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={tomorrow}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Due Tomorrow </span>
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
              {due == format(weekend_, "MM-dd-yyyy") ? (
                <button
                  type="button"
                  onClick={weekend}
                  htmlFor="option1"
                  className="block w-full p-3 border border-white bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium">
                    {" "}
                    Due This Weekend{" "}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={weekend}
                  htmlFor="option1"
                  className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium">
                    {" "}
                    Due This Weekend{" "}
                  </span>
                </button>
              )}
            </div>

            <div>
              {/* <input className="sr-only" id="option3" type="date" tabIndex="-1" /> */}
              <input
                type="date"
                value={`${new Date(due).getFullYear()}-${
                  new Date(due).getMonth().toString().length === 1
                    ? "0" + new Date(due).getMonth().toString()
                    : new Date(due).getMonth().toString()
                }-${
                  new Date(due).getDate().toString().length === 1
                    ? "0" + new Date(due).getDate().toString()
                    : new Date(due).getDate().toString()
                }`}
                onChange={(e) => updateDue(e.target.value)}
                className="block w-full p-3 border border-neutral bg-neutral text-white rounded-lg"
                tabIndex="0"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="description">
              Homework Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 text-sm border-neutral bg-neutral text-white rounded-lg"
              placeholder="Homework Description"
              rows="8"
              id="description"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              ref={btnSubmit}
              type="submit"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-accent rounded-lg sm:w-auto"
            >
              <span className="font-medium"> Add Homework </span>

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
