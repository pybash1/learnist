import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import Search from "../components/Search";
import ToDo from "../components/ToDo";

export default function Dashboard() {
  const router = useRouter();

  const { success } = router.query;

  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);

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
      <div className="grid grid-cols-4 gap-2">
        <Sidebar />
        <div className="col-span-3">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">To Do&apos;s</h2>
            <Search />
          </div>
          <div className="p-20">
            <ToDo />
          </div>
        </div>
      </div>
    </div>
  );
}
