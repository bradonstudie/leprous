import { Link } from "wouter";
import type { MenuLink } from "@/types";

type PropTypes = {
  navItems: MenuLink[];
};

export const LeprousNavigation = ({ navItems }: PropTypes) => (
  <div className="flex flex-col md:flex-row w-full items-center justify-between px-3 mt-5 gap-3 mb-5">
    <div className="flex flex-col md:flex-row items-center gap-3">
      <div className="flex text-lg">
        <div className="border-2 border-dashed rounded-full text-center w-8 h-8 flex items-center justify-center -mr-1">
          B
        </div>
        <div className="border-2 border-dashed rounded-full text-center w-8 h-8 flex items-center justify-center -ml-1">
          S
        </div>
      </div>

      <div>
        <p className="uppercase text-2xl overflow-hidden whitespace-nowrap mx-auto text-center md:text-left">
          Bradon Studebaker
        </p>
        <p>Designer & Engineer • Baltimore, Maryland</p>
      </div>
    </div>

    <nav>
      <ul className="flex flex-wrap gap-3 justify-center md:justify-end">
        {navItems
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={navItem.href}
                className="border-2 border-dashed rounded-none px-3 py-1 text-md uppercase
              hover:text-white hover:bg-black hover:rounded-[50px]
              active:text-white active:bg-black active:rounded-[50px]
              transition-all duration-300 ease-in"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        <li className="basis-full md:basis-auto text-center md:text-left">
          <a
            href="mailto:bradon.studebaker@gmail.com"
            className="bg-black text-white px-2"
          >
            bradon.studebaker@gmail.com
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
