import Logo from "./logo";

export default function LoadingLogo({
  width = 100,
  height = 100,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className="animate-spin w-full flex items-center justify-center">
      <Logo width={width} height={height} />
    </div>
  );
}
