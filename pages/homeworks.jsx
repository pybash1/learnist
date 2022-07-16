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
  const [loading, setLoading] = useState(true);

  const [isModalHidden, setIsModalHidden] = useState(true);
  const showModal = () => {
    setIsModalHidden(false);
  };
  const hideModal = () => {
    setIsModalHidden(true);
  };

  // console.log(homeworks)

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
    }).then((res) =>
      res.json().then((data) => {
        if (data) {
          setHomeworks(data);
          setLoading(false);
        }
      })
    );
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
  }, [success]);

  // if (loading) {
  //   return "loading data..."
  // }

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
      <div className="grid grid-cols-5 gap-2">
        <Sidebar />
        <div className="col-span-4">
          <div className="pt-10 px-6 font-semibold flex flex-row justify-between">
            <h2 className="text-2xl text-white">Welcome, {user?.username}</h2>
            <Search />
          </div>
          {false ? (
            <Empty onClick={showModal} />
          ) : (
            <>
              {loading ? (
                <div
                  // wire:loading
                  className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
                >
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                  <h2 className="text-center text-white text-xl font-semibold">
                    Loading...
                  </h2>
                  <p className="w-1/3 text-center text-white">
                    This may take a few seconds, please wait.
                  </p>
                </div>
              ) : null}
              <div className="grid grid-cols-2 gap-10 p-10">
                {homeworks.map((hw, ind) => (
                  <Homework
                    key={ind}
                    id={hw.id}
                    name={hw.name}
                    description={hw.description}
                    teacher={hw.assigned_by}
                    className={hw.class}
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
