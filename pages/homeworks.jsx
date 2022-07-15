import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import Search from "../components/Search";
import Empty from "../components/Empty";
import Homework from "../components/Homework";
import OutsideClickHandler from "react-outside-click-handler";
import HwModal from "../components/HwModal";

export default function Homeworks() {
  const router = useRouter();

  const { success } = router.query;

  const [user, setUser] = useState(null);
  const [homeworks, setHomeworks] = useState([]);

  const [isModalHidden, setIsModalHidden] = useState(true);
  const showModal = () => {
    setIsModalHidden(false);
    console.log("showmodal", isModalHidden);
  };
  const hideModal = () => {
    setIsModalHidden(true);
    console.log("hidemodal", isModalHidden);
  };

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
    fetch(process.env.NEXT_PUBLIC_API_URL + "/homeworks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => res.json().then((data) => setHomeworks(data)));
  }, []);

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
      <button
        onClick={showModal}
        className="rounded-full bg-accent absolute bottom-4 right-4 p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {!isModalHidden && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-neutral bg-opacity-60 backdrop-blur">
          <div className="flex items-center justify-center h-full">
            <OutsideClickHandler onOutsideClick={hideModal}>
              <HwModal />
            </OutsideClickHandler>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-2">
        <Sidebar />
        <div className="col-span-3">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">Welcome, {user?.username}</h2>
            <Search />
          </div>
          {false ? (
            <Empty onClick={showModal} />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-10 p-10">
                {homeworks.map((hw, ind) => (
                  <Homework
                    key={ind}
                    id={hw.id}
                    name={hw.name}
                    description={hw.description}
                    teacher={hw.assigned_by}
                    class={hw.class}
                    date={new Date(hw.due)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
