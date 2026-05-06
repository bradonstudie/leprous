import Bradon from "@/assets/bradon.png";
import { ExternalLink } from "../ExternalLink";

export const AboutSplashSection = () => (
  <div className="flex-1 flex flex-col items-center text-center md:pb-20 pb-32">
    <h1 className="uppercase text-2xl">About Me</h1>
    <p className="px-2 mt-1 w-sm">
      I am a designer, engineer, and illustrator working from Baltimore,
      Maryland across the physical and digital mediums.
    </p>
    <img src={Bradon} className="w-sm" />
    <p className="px-2 mt-1 w-sm">
      If you would like to get in touch, please send me an email.
    </p>
    <ExternalLink
      href="mailto:bradon.studebaker@gmail.com"
      text="bradon.studebaker@gmail.com"
    />
  </div>
);
