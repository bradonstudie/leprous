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
  rows?: boolean;
  children?: React.ReactNode;
};

export const SectionDescriptor = ({
  title,
  subtitle,
  skills,
  description,
  websiteUrl,
  projectId,
  rows,
  children,
}: PropTypes) => (
  <section
    className="flex flex-col items-center px-3 my-15 first:mt-5"
    id={projectId}
  >
    <div className="border-2 border-dashed rounded-none md:w-xl w-full max-w-3xl mt-5 mb-3 px-5 py-1 text-center text-balance">
      <h3 className="uppercase text-lg mb-1">
        <span className="bg-black text-white">
          <span className="px-1">{title}</span>
          <br className="md:hidden" />
          <span className="hidden md:inline"> - </span>
          <i className="px-1">"{subtitle}"</i>
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
    <div className="max-w-7xl">
      <div
        className={`flex ${rows ? "flex-col" : "md:flex-row flex-col"} items-center justify-center gap-3`}
      >
        {children}
      </div>
    </div>
  </section>
);
