import NavBar from "./_components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen p-4 sm:flex sm:items-center sm:justify-center lg:p-5">
        <div className="flex h-[calc(100vh-2rem)] max-w-[900px] flex-col border border-blue-600 sm:w-[1000px] lg:h-[calc(100vh-4rem)]">
          <div className="flex-shrink-0 pt-5">
            <NavBar />
          </div>
          <div className="flex-grow overflow-hidden">
            <div className="h-full overflow-auto">{children}</div>
          </div>
          <div className="flex-shrink-0 border-t border-blue-600 px-5 py-3">
            hello lorem Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
      </div>
    </>
  );
}
