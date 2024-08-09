"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

export default function SignOut() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (!session) {
      router.push("/Login");
    }
  }, [session, status, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/Login");
  };

  return (
    <>
      <NavBar />
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 md:px-0"
        style={{
          backgroundImage:
            'url("https://arrivls.com/wp-content/uploads/2023/01/donna-dhs-70.jpg")',
        }}
      >
        <div className="bg-white bg-opacity-75 p-8 w-full max-w-md rounded-lg shadow-lg text-center">
          {status === "loading" ? (
            <div className="text-black">
              <p className="text-xl mb-4">Loading...</p>
            </div>
          ) : session ? (
            <div className="text-black">
              <p className="text-2xl font-semibold mb-4">
                Hello, {session.user.firstName}!
              </p>
              <p className="mb-6">Are you sure you want to sign out?</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out w-full"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="text-gray-700">
              <p className="text-xl mb-4">Redirecting...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
