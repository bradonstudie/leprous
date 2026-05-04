type PropTypes = {
  children: React.ReactNode;
};

export const TextTag = ({ children }: PropTypes) => (
  <p className="px-2 border-2 border-dashed rounded-full text-sm">{children}</p>
);
