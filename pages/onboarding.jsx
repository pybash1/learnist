import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";

export default function Onboarding() {
  const router = useRouter();
  const { plan } = router.query;
  const [email, setEmail] = useState(router.query.email || "");
  const [password, setPassword] = useState("");
  const plan_ = plan == 0 ? "Free" : plan == 1 ? "Teacher" : "Free";

  const signup = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) =>
      res.json().then((data) => {
        if (data.token) {
          setCookie("token", data.token);
          router.push("/dashboard?success=Created account successfully!");
        } else {
          toast.error(
            data?.error.charAt(0).toUpperCase() + data?.error.substr(1) + "!" ||
              "Unknown error occured!"
          );
        }
      })
    );
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
        if (res.status === 200) {
          router.push("/dashboard");
        }
      });
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
      <Navbar />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-accent sm:text-3xl">
            Create Account
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            Sign up now to manage your homeworks, classes, notes, etc.
          </p>

          <form
            onSubmit={signup}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-neutral"
          >
            <p className="text-lg font-medium text-white">Sign Up</p>

            <div>
              <label htmlhtmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-primary text-white"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
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
            </div>

            <div>
              <label
                htmlhtmlFor="password"
                className="text-sm font-medium text-white"
              >
                Password
              </label>

              <div className="relative mt-1">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-primary text-white"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {plan_ === "Teacher" ? (
              <button
                type="button"
                onClick={null}
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-gray-400 rounded-lg transition ease-in-out cursor-not-allowed"
              >
                Teacher&apos;s Plan is Coming Soon
              </button>
            ) : (
              <button
                type="submit"
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-accent hover:bg-accent/75 rounded-lg transition ease-in-out"
              >
                {`Sign Up with ${plan_} Plan`}
              </button>
            )}

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login">
                <a className="underline">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
