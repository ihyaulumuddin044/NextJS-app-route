export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-[60px] z-10 h-screen w-60 bg-gray-800 overflow-y-auto">
        <h1>This is About Layout</h1>
        <ul className="text-black">
          <li>home</li>
          <li>about</li>
          <li>outhers</li>
          <li>coba</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
