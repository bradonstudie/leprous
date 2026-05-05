type PropTypes = {
  text: string;
};

export const PageHeader = ({ text }: PropTypes) => (
  <div className="flex justify-center">
    <h2 className="text-white md:text-8xl text-5xl uppercase -mb-15">
      <span className="bg-black px-5">{text}</span>
    </h2>
  </div>
);
