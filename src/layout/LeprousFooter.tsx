import { ExternalLink } from "../components/ExternalLink";
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
          <ExternalLink href={footerItem.href} text={footerItem.label} />
        </li>
      ))}
    </ul>
  </footer>
);
