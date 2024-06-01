import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
      }}
      className="w-full h-[80px] flex items-center justify-center text-primary bg-secondary-50 mt-4 md:mt-6"
    >
      <p className="text-sm">2024 | GOAT | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
