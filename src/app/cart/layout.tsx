
export default function CartLayout({
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
