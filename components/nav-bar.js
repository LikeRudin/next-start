import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          font-size: large;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
