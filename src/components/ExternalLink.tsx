type PropTypes = {
  href: string;
  text: string;
};

export const ExternalLink = ({ href, text }: PropTypes) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className="border-b-2 border-dashed"
  >
    {text}
  </a>
);
