"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";

const SessionWrapper = ({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) => {
  return <SessionProvider basePath={`/${lang}/api/auth`}>{children}</SessionProvider>;
};

export default SessionWrapper;
