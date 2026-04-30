type PropTypes = {
  label: string;
  id?: string;
};

export const TextTab = ({ label, id }: PropTypes) => (
  <div className="bg-black text-sm px-3 text-vertical text-white uppercase">
    <h2 id={id}>{label}</h2>
  </div>
);
