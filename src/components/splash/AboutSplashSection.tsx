import { ExternalLink } from "../ExternalLink";
import { MEDIA } from "@/config";

export const AboutSplashSection = () => (
  <div className="flex-1 flex flex-col items-center text-center px-3">
    <h1 className="uppercase text-2xl">About Me</h1>
    <p className="px-2 mt-1 w-sm">
      I am a designer, engineer, and illustrator working from Baltimore,
      Maryland across the physical and digital mediums.
    </p>
    <img src={MEDIA.siteAssets.portrait} alt="A photo of me" className="w-sm" />
    <p className="px-2 mt-1 w-sm text-balance">
      If you would like to get in touch, please send me an email:
    </p>
    <ExternalLink
      href="mailto:bradon.studebaker@gmail.com"
      text="bradon.studebaker@gmail.com"
    />
    <p className="px-2 mt-1 w-sm text-balance">
      The hand coded source for this site is available on GitHub:
    </p>
    <ExternalLink
      href="https://github.com/bradonstudie/leprous"
      text="https://github.com/bradonstudie/leprous"
    />
  </div>
);
