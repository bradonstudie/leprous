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
  <div className="text-center mt-3">
    <h2 className="uppercase text-lg">
      {title} - <i>{subtitle}</i>
    </h2>
    <div className="flex items-center justify-center gap-2">
      {skills.map((skill) => (
        <TextTag key={skill}>{skill}</TextTag>
      ))}
    </div>
    <p>{description}</p>
    {websiteUrl && (
      <a
        href={websiteUrl}
        target="_blank"
        className="underline decoration-2 decoration-dashed"
      >
        {websiteUrl}
      </a>
    )}
  </div>
);
