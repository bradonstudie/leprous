type PropTypes = {
  href: string;
  text: string;
};

export const ExternalLink = ({ href, text }: PropTypes) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className="group relative inline-flex items-center gap-1
      after:absolute after:bottom-[3px] after:left-0 after:right-0 
      after:border-b-2 after:border-dashed after:border-current"
  >
    {text}
    <svg
      fill="currentColor"
      width="0.75em"
      height="0.75em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 3.5L8.5 9 7 7.5 12.5 2H10V0h6v6h-2V3.5zM6 0v2H2v12h12v-4h2v6H0V0h6z"
        fillRule="evenodd"
      />
    </svg>
  </a>
);
