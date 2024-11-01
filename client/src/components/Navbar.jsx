import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="m-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="/logo.webp" className="w-16 rounded-xl" alt="" />
          </Link>
        </div>

        <div>
          <ul className="flex gap-4 cursor-pointer">
          <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/alldoctors">
              <li>All doctors</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div>
          <button className="border-4 border-sky-600 cursor-pointer">Create account</button>
        </div>
      </nav>
    </>
  );
};
