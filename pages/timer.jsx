import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import Search from "../components/Search";

export default function Dashboard() {
  const router = useRouter();

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
        <Sidebar active={3} />
        <div className="col-span-4">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">Timer</h2>
            <Search />
          </div>
          <div className="flex flex-col items-center justify-center px-48 py-10">
            <h1 className="text-accent text-5xl font-bold">Coming Soon!</h1>
            &nbsp;&nbsp;
            <div className="text-accent/60 text-md font-semibold">Timers are coming soon! Subscribe to our newsletter to be the first to know when they launch!</div>
            &nbsp;&nbsp;
            <img src="/comingsoon.svg" width="75%" heihgt="75%" />
          </div>
        </div>
      </div>
    </div>
  );
}
