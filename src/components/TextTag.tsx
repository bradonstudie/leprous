type PropTypes = {
  children: React.ReactNode;
};

export const TextTag = ({ children }: PropTypes) => (
  <p className="border-2 border-dashed px-2 rounded-full text-sm">{children}</p>
);
