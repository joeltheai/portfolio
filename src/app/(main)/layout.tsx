import NavBar from "./_components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-center min-h-screen  p-4 lg:p-5  ">
        <div className=" sm:w-[1000px] max-w-[900px] min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-4rem)]  border border-blue-600 py-5">
          <NavBar />
          <div className="overflow-auto max-h-[calc(100vh-8rem)]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
