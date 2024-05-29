"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

const ProfilePage: FC = () => {
  const session = useSession();
  const router = useRouter();
  const handleLogout = () => {
    signOut();
  };

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl mb-4">Profile</h1>
      <div>
        <p>
          Logged in as <b>{session.data?.user?.name}</b>
        </p>
        <p>
          Email: <b>{session.data?.user?.email}</b>
        </p>
      </div>
      <button
        className="rounded mt-6 text-white py-2 px-4 bg-primary"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default ProfilePage;
