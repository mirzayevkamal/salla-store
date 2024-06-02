"use client";

import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const loginSchema = object().shape({
  username: string().required(),
  password: string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/,
      "Password should have at least 5 characters, one number and one special character"
    ),
});

export default function SignIn() {
  const router = useRouter();
  const [fullPath, setFullPath] = useState("");
  const translate = useTranslations();

  useEffect(() => {
    if (window !== undefined) {
      console.log('window.location.href', window.location.href)
      setFullPath(window.location.href.split("=")[1] || "/");
    }
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ username: string; password: string }>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: { username: string; password: string }) => {
    const status = await signIn("credentials", {
      redirect: false,
      callbackUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "/",
      ...data,
    });

    if (status?.ok) {
      router.push(fullPath);
    } else {
      Notiflix.Notify.failure("Invalid username or password");
    }
  };
  return (
    <div className="container">
      <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
        <div className="flex flex-col text-center items-center justify-center mb-6">
          <h2 className="text-lg">GOAT Store</h2>
          <span className="text-xs text-gray-500">{translate('loginText')}</span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <div className="mb-4">
            <input
              type="text"
              {...register("username")}
              className="w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder={translate("username")}
            />
            <div className="text-xs text-red-500">
              <ErrorMessage errors={errors} name="username" />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="password"
              {...register("password")}
              className="w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder={translate("password")}
            />
            <div className="text-xs text-red-500">
              <ErrorMessage errors={errors} name="password" />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md"
            >
              {translate("login")}
            </button>
            <a
              type="submit"
              className="w-fit text-primary underline p-2 text-md rounded-md"
            >
              {translate("forgotPassword")}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
