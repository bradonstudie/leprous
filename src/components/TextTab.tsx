type PropTypes = {
  label: string;
  id?: string;
};

export const TextTab = ({ label, id }: PropTypes) => (
  <div className="px-3 uppercase flex justify-between items-center">
    <div>
      <h2 className="text-lg" id={id}>
        {label}
      </h2>
      <p className="italic">Physical Media</p>
    </div>
    <p className="border-2 border-dashed rounded-full px-2">2026</p>
  </div>
);
