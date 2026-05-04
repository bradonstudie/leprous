import { NavItems } from "@/config";
import { Link } from "wouter";

export const LeprousNavigation = () => (
  <nav className="mt-3">
    <ul className="flex justify-between w-md md:w-3xl md:px-0 px-3">
      {NavItems.sort((a, b) => a.sortOrder - b.sortOrder).map((navItem) => (
        <li key={navItem.id}>
          <Link
            href={navItem.href}
            className="border-2 border-dashed rounded-none px-3 py-1 text-md uppercase 
              hover:text-white hover:bg-black hover:rounded-[50px] 
              transition-all duration-300 ease-in"
          >
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
