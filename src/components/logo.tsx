import Image from "next/image";

const Logo = ({
  width = 60,
  height = 60,
}: {
  width?: number;
  height?: number;
}) => {
  const imageSrc = `${process.env.NEXT_PUBLIC_SOURCE}/images/logo/logo-square.png`;
  return <Image src={imageSrc} alt="logo" width={width} height={height} />;
};
export default Logo;
