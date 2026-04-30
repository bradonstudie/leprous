import { NavItems } from "../config";

export const LeprousNavigation = () => (
  <nav className="mx-3">
    <ul className="flex justify-around">
      {NavItems.map((navItem) => (
        <li key={navItem.id}>
          <a href={navItem.href}>{navItem.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);
