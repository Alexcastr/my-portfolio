import { FC, useState } from "react";

import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import { Profile } from "./";

interface Props {
  children: React.ReactNode;
}

const menu = [
  {
    name: "Home",
    href: "#home_section",
    icon: "home"

  },
  {
    name: "About",
    href: "#about_section",
    icon: "person"
  },
  {
    name: "Projects",
    href: "#projects_section",
    icon: "receipt_long"

  },
  {
    name: "Contact",
    href: "#contact_section",
    icon: "mail"
  }
]

export const Sidebar: FC<Props> = ({ children }) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  function handleNavbar(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOpenNavbar(!openNavbar);
  }

  return (
    <section className="relative min-h-screen md:flex">
      <div className="sticky top-0 z-10 bg-slate-900 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <Link href="/" legacyBehavior>
          <a className="block p-4 text-white font-bold ">Portfolio</a>
        </Link>
        {/* mobile menu button  */}
        <button
          onClick={handleNavbar}
          className={`p-4 focus:outline-none ${
            openNavbar ? "bg-slate-900 " : "bg-cyan-900"
          } transition duration-100`}
        >
          <AiOutlineMenu className="w-5 h-5" />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`${
          openNavbar ? "-translate-x-full " : ""
        }  bg-slate-900 text-blue-100 w-64 space-y-6 py-7 px-2 absolute z-20 inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="sticky left-0 top-7 ">
          <Profile />
          <nav className="pl-4 pt-4">
            {menu.map(({ name, href, icon }) => (
              <Link href={href} key={name} legacyBehavior>
                <a className="block py-2.5 px-4 hover:bg-cyan-900 hover:text-white rounded transition duration-200">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined">{icon}</span>
                    {name}
                  </div>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <main className="bg-slate-900 flex-1 text-2xl font-bold text-gray-700">
        {children}
      </main>
    </section>
  );
};
