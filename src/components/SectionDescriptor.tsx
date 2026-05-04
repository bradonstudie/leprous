import { ExternalLink } from "./ExternalLink";
import { TextTag } from "./TextTag";

type PropTypes = {
  title: string;
  subtitle: string;
  skills: string[];
  description: string;
  websiteUrl?: string;
};

export const SectionDescriptor = ({
  title,
  subtitle,
  skills,
  description,
  websiteUrl,
}: PropTypes) => (
  <div className="flex justify-center px-3">
    <div className="text-center mt-15 border-2 border-dashed w-fit px-5 py-1 hover:bg-black hover:text-white transition-all duration-500">
      <h2 className="uppercase text-xl">
        {title} - <i>{subtitle}</i>
      </h2>
      <div className="flex items-center justify-center gap-2">
        {skills.map((skill) => (
          <TextTag key={skill}>{skill}</TextTag>
        ))}
      </div>
      <p>{description}</p>
      {websiteUrl && <ExternalLink text={websiteUrl} href={websiteUrl} />}
    </div>
  </div>
);
