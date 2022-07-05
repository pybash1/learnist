import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const router = useRouter();

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

  return (
    <div className="bg-primary min-h-screen">
      <div className="grid grid-cols-4 gap-8">
        <Sidebar />
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
