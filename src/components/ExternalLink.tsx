type PropTypes = {
  href: string;
  text: string;
};

export const ExternalLink = ({ href, text }: PropTypes) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline decoration-dashed decoration-2"
  >
    {text}
  </a>
);
