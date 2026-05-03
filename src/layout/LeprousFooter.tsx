import { FooterItemsLeft, FooterItemsRight } from "../config";

export const LeprousFooter = () => (
  <footer className="w-full flex justify-between my-3 px-3">
    <ul>
      {FooterItemsLeft.map((footerItem) => (
        <li key={footerItem.id}>{footerItem.label}</li>
      ))}
    </ul>
    <ul className="text-right">
      {FooterItemsRight.map((footerItem) => (
        <li key={footerItem.id}>
          <a
            href={footerItem.href}
            target="_blank"
            rel="noopener"
            className="underline decoration-2 decoration-dashed"
          >
            {footerItem.label}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);
