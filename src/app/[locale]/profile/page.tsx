"use client";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";

const ProfilePage: FC<{
  params: { locale: string };
}> = ({ params: { locale } }) => {
  const session = useSession();
  const router = useRouter();
  const translate = useTranslations();

  const handleLogout = () => {
    signOut({
      callbackUrl: `/${locale}/auth/signin`,
    });
  };

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router.push("/auth/signin");
    return null;
  }

  return (
    <>
      <h1 data-testid="profile-title" className="text-3xl mb-4">{translate("profile")}</h1>
      <div>
        <p>
          {translate("loggedInAs")} <b>{session.data?.user?.name}</b>
        </p>
        <p>
          {translate("email")}: <b>{session.data?.user?.email}</b>
        </p>
      </div>
      <button
        className="rounded mt-6 text-white py-2 px-4 bg-primary"
        onClick={handleLogout}
      >
        {translate("logout")}
      </button>
    </>
  );
};

export default ProfilePage;
