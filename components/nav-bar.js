import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: large;
          font-weight: bold;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
