import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import Search from "../components/Search";
import Schedule from "../components/Schedule";

export default function SchedulePage() {
  const router = useRouter();
  const [schedule, setSchedule] = useState([]);

  const { success } = router.query;

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
    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/classes/schedule/" + new Date().getDay().toString(),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookie("token"),
        },
      }
    ).then((res) =>
      res.json().then((data) => {
        if (!data.error) {
          let sched = [];
          data.forEach((elem) => {
            let origSH = elem.stime.split(":")[0];
            let origSM = elem.stime.split(":")[1];
            let origEH = elem.etime.split(":")[0];
            let origEM = elem.etime.split(":")[1];
            let i = elem;
            i.stime = new Date();
            i.stime.setHours(origSH);
            i.stime.setMinutes(origSM);
            i.etime = new Date();
            i.etime.setHours(origEH);
            i.etime.setMinutes(origEM);
            sched.push(i);
          });
          setSchedule(sched);
        } else {
          toast.error(data.error);
        }
      })
    );
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
      <div className="grid grid-cols-5 gap-2">
        <Sidebar active={5} />
        <div className="col-span-4">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">Schedule</h2>
            <Search />
          </div>
          <div className="p-20">
            <Schedule classes={schedule} />
          </div>
        </div>
      </div>
    </div>
  );
}
