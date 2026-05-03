import { NavItems } from "../config";

export const LeprousNavigation = () => (
  <nav className="mt-3">
    <ul className="flex justify-between w-md md:w-3xl md:px-0 px-3">
      {NavItems.sort((a, b) => a.sortOrder - b.sortOrder).map((navItem) => (
        <li key={navItem.id}>
          <a
            href={navItem.href}
            className="border-2 border-dashed rounded-full px-3 py-1 text-md uppercase hover:text-white hover:bg-black transition-all duration-350"
          >
            {navItem.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
