"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          {children}
        </div>
      </div>
    </main>
  );
}
