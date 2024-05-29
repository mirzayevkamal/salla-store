import Logo from "@/components/logo";

export default function Loading() {
  return (
    <div className="animate-spin w-full h-[80vh] flex items-center justify-center">
      <Logo width={100} height={100} />
    </div>
  );
}
