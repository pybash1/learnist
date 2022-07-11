import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import Calendar from "../components/Calendar";
import Search from "../components/Search";
import Timeline from "../components/Timeline";

export default function Dashboard() {
  const router = useRouter();

  const { success } = router.query;

  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = getCookie("token");

    if (token) {
      fetch(process.env.NEXT_PUBLIC_API_URL + "/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((res) => {
        if (res.status !== 200) {
          router.push("/login");
        }
      });
    } else {
      router.push("/login");
    }
  });

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

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  });

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
      <div className="grid grid-cols-4 gap-2">
        <Sidebar />
        <div className="col-span-3">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">Welcome, {user?.username}</h2>
            <Search />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-white text-2xl font-semibold px-6">
                Classes
              </h1>
              <div className="py-8 pr-10 pl-6 grid grid-cols-1 gap-4">
                <Timeline
                  classes={[
                    {
                      name: "Mathematics",
                      teacher: "Mr. Maths Teacher",
                      stime: new Date(2022, 6, 11, 16, 30, 0, 0),
                      etime: new Date(2022, 6, 11, 17, 40, 0, 0),
                    },
                    {
                      name: "Computer Science",
                      teacher: "Mr. C. S. Teacher",
                      stime: new Date(2022, 6, 11, 15, 0, 0, 0),
                      etime: new Date(2022, 6, 11, 15, 30, 0, 0),
                    },
                    {
                      name: "Science",
                      teacher: "Mr. P. C. Biology",
                      stime: new Date(),
                      etime: new Date(),
                    },
                  ]}
                />
              </div>
            </div>
            <div className="pt-8">
              <Calendar />
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
