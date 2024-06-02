"use client";
import LocaleSwitcher from "@/components/locale-switcher";
import Logo from "@/components/logo";
import MagneticWrapper from "@/components/magnetic-wrapper";
import { CartContext } from "@/context/cart-context";
import { Link } from "@/navigation";
import { useSession } from "next-auth/react";
import { useContext } from "react";

const Navbar = () => {
  const session = useSession();
  const { cartItemsCount } = useContext(CartContext);

  return (
    <header className="w-full">
      <div className="container">
        <div className="md:py-6 py-4">
          <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 relative">
              <Link
                href="/"
                className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50"
              >
                {/* Nice little magnetic animation on hover to logo */}
                <MagneticWrapper>
                  <Logo />
                </MagneticWrapper>
              </Link>
              <div className="flex flex-col">
                <h1 className="text-xl">GOAT Store</h1>
                <small className="text-gray-400">
                  A store for all your needs
                </small>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <LocaleSwitcher />
              {session.status === "authenticated" ? (
                <Link
                  className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                  href="/profile"
                >
                  <i className="sicon-user"></i>
                </Link>
              ) : (
                <Link
                  className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                  href="/auth/signin"
                >
                  <i className="sicon-house-door"></i>
                </Link>
              )}

              <Link
                className="w-[40px] h-[40px] relative rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                href="/cart"
              >
                <i className="sicon-shopping-bag"></i>
                {cartItemsCount ? (
                  <span className="absolute top-[-5px] right-[-5px] text-xs w-[20px] h-[20px] rounded-full bg-primary text-white flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
