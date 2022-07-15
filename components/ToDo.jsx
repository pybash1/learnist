import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ToDo() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  function addTodo() {
    if (!name || !desc) {
      toast.error("Name or description cannot be empty!");
      return;
    }

    if (!localStorage.getItem("todos")) {
      localStorage.setItem(
        "todos",
        JSON.stringify([{ name: name, desc: desc, status: 0 }])
      );
      todos.push({ name: name, desc: desc, status: 0 });
      setName("");
      setDesc("");
    } else {
      localStorage.setItem(
        "todos",
        JSON.parse(localStorage.getItem("todos")).concat([
          { name: name, desc: desc, status: 0 },
        ])
      );
      todos.push({ name: name, desc: desc, status: 0 });
      setName("");
      setDesc("");
    }
  }

  function updateTodo(status, index) {
    let todo = todos[index];
    if (todo.status > 2) {
      todo.status = 1;
      setName(name + " ");
      let todos_ = [...todos];
      todos_[index] = todo;
      setTodos(todos_);
      localStorage.setItem("todos", JSON.stringify(todos_));
      return;
    }
    todo.status = todo.status + 1;
    setName(name + " ");
    let todos_ = [...todos];
    todos_[index] = todo;
    setTodos(todos_);
    localStorage.setItem("todos", JSON.stringify(todos_));
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-primary">
        <thead>
          <tr>
            <th className="p-4 font-medium text-left text-primary whitespace-nowrap bg-accent">
              <div className="flex items-center">Name</div>
            </th>
            <th className="p-4 font-medium text-left text-primary whitespace-nowrap bg-accent">
              <div className="flex items-center">Description</div>
            </th>
            <th className="p-4 font-medium text-left text-primary whitespace-nowrap bg-accent">
              <div className="flex items-center">Status</div>
            </th>
          </tr>
        </thead>

        <tbody className="">
          {todos.map((todo, ind) => (
            <tr className="border-primary border-y-2" key={ind}>
              <td className="p-4 font-medium text-white whitespace-nowrap bg-neutral">
                {todo.name}
              </td>
              <td className="p-4 text-gray-400 whitespace-nowrap bg-neutral">
                {todo.desc}
              </td>
              <td className="p-4 text-gray-400 whitespace-nowrap bg-neutral">
                <button
                  onClick={() => updateTodo(todo.status, ind)}
                  className={`bg-${
                    todo.status === 0
                      ? "red"
                      : todo.status === 1
                      ? "amber"
                      : todo.status === 2
                      ? "green"
                      : "red"
                  }-100 text-${
                    todo.status === 0
                      ? "red"
                      : todo.status === 1
                      ? "amber"
                      : todo.status === 2
                      ? "green"
                      : "red"
                  }-700 px-3 py-1.5 rounded text-xs font-medium`}
                >
                  {todo.status === 0
                    ? "Todo"
                    : todo.status === 1
                    ? "Doing"
                    : todo.status === 2
                    ? "Done"
                    : "Todo"}
                </button>
              </td>
            </tr>
          ))}

          <tr className="border-primary border-y-2">
            <td className="p-4 font-medium whitespace-nowrap bg-neutral text-white">
              <div className="relative">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Name{" "}
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-3 pl-3 pr-12 text-sm border-2 border-primary rounded-2xl text-white bg-primary"
                  id="email"
                  type="email"
                  placeholder="Name"
                />

                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </td>
            <td className="p-4 text-gray-400 whitespace-nowrap bg-neutral">
              <div className="relative">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Description{" "}
                </label>

                <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full py-3 pl-3 pr-12 text-sm border-2 border-primary rounded-2xl text-white bg-primary"
                  id="email"
                  type="email"
                  placeholder="Description"
                />

                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </td>
            <td className="p-4 text-gray-400 whitespace-nowrap bg-neutral">
              <button
                onClick={addTodo}
                className="relative inline-block px-8 py-3 text-accent border border-current rounded-full group transition ease-in-out hover:bg-accent hover:text-primary"
              >
                <span className="text-sm font-medium">Add</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
