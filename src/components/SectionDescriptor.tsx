import type { PROJECT_ID } from "@/types";
import { ExternalLink } from "./ExternalLink";
import { TextTag } from "./TextTag";

type PropTypes = {
  title: string;
  subtitle: string;
  skills: string[];
  description: string;
  websiteUrl?: string;
  projectId: PROJECT_ID;
  children?: React.ReactNode;
};

export const SectionDescriptor = ({
  title,
  subtitle,
  skills,
  description,
  websiteUrl,
  projectId,
  children,
}: PropTypes) => (
  <section className="flex flex-col items-center px-3 my-15" id={projectId}>
    <div className="border-2 border-dashed rounded-none md:w-xl w-full mt-5 px-5 py-1 text-center">
      <h3 className="uppercase text-lg mb-1">
        <span className="bg-black text-white px-3">
          <span className="">{title}</span> - <i>"{subtitle}"</i>
        </span>
      </h3>
      <div className="flex justify-center gap-2">
        {skills.map((skill) => (
          <TextTag key={skill}>{skill}</TextTag>
        ))}
      </div>
      <p>{description}</p>
      {websiteUrl && <ExternalLink text={websiteUrl} href={websiteUrl} />}
    </div>
    {children}
  </section>
);
