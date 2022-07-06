import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, success } = router.query;

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

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (success) {
      toast.success(success);
    }
  }, []);

  const login = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
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
          router.push("/dashboard?success=Logged in successfully!");
        } else {
          toast.error(
            data?.error.charAt(0).toUpperCase() + data?.error.substr(1) + "!" ||
              "Unknown error occured!"
          );
        }
      })
    );
  };

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
            Welcome Back
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            Login to access your homeworks, classes, notes, etc.
          </p>

          <form
            onSubmit={login}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-neutral"
          >
            <p className="text-lg font-medium text-white">
              Login to your account
            </p>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-white">
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
                htmlFor="password"
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

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-accent hover:bg-accent/75 rounded-lg transition ease-in-out"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500">
              No account yet?{" "}
              <Link href="/onboarding?plan=0">
                <a className="underline">Sign up</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
