import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import { Toaster } from "react-hot-toast";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";

export default function SearchPage() {
  const router = useRouter();
  const [homeworks, setHomeworks] = useState([]);

  const { q } = router.query;

  useEffect(() => {
    try {
      let query = window.location.search.split("=")[1];
      fetch(process.env.NEXT_PUBLIC_API_URL + "/homeworks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookie("token"),
        },
      }).then((res) =>
        res.json().then((data) => {
          let filtered = [];
          data.forEach((hw) => {
            if (hw.name.includes(query) || hw.description.includes(query)) {
              filtered.push(hw);
            }
          });
          setHomeworks(filtered);
        })
      );
    } catch (e) {
      router.push("/dashboard?error=Empty query provided");
    }
  }, []);

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
        <Sidebar active={5} />
        <div className="col-span-4">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">
              Search Results for &apos;{q}&apos;
            </h2>
            <Search />
          </div>
          <div className="p-20">
            <div className="">
              <table className="min-w-full text-sm divide-y divide-primary">
                <thead>
                  <tr>
                    <th className="p-4 font-medium text-left text-primary whitespace-nowrap bg-accent">
                      <div className="flex items-center">Name</div>
                    </th>
                    <th className="p-4 font-medium text-left text-primary whitespace-nowrap bg-accent">
                      <div className="flex items-center">Class</div>
                    </th>
                    <th className="p-4 font-medium text-left text-primary whitespace-nowrap bg-accent">
                      <div className="flex items-center">Due Date</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {homeworks.map((homework, ind) => (
                    <tr className="border-primary border-y-2" key={ind}>
                      <td className="p-4 font-medium text-white whitespace-nowrap bg-neutral">
                        <Link href={`/homework/${homework.id}`}>
                          <a className="">{homework.name}</a>
                        </Link>
                      </td>
                      <td className="p-4 text-gray-400 whitespace-nowrap bg-neutral">
                        {homework.class}
                      </td>
                      <td className="p-4 text-gray-400 whitespace-nowrap bg-neutral">
                        <button className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                          {homework.due}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
