// import { TextTab } from "../components/TextTab";
import ShirtFront from "../assets/hs-shirt-front.webp";
import ShirtBack from "../assets/hs-shirt-back.webp";
import { TextTag } from "../components/TextTag";

export const HumanShieldSection = () => (
  <section className="mt-3">
    <div className="flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-xl p-3">
        <img src={ShirtFront} alt="Human Shield - longsleeve front" />
      </div>
      <div className="md:w-xl p-3">
        <img src={ShirtBack} alt="Human Shield - longsleeve back" />
      </div>
    </div>

    <div className="text-center mt-3">
      <h2 className="uppercase text-lg">
        Human Shield - <i>Onto Cement</i>
      </h2>
      <div className="flex items-center justify-center gap-2">
        <TextTag>Logo</TextTag>
        <TextTag>Illustration</TextTag>
        <TextTag>Design</TextTag>
      </div>
      <p className="">
        Longsleeve design for Tennessee power violence band Human Shield
      </p>
    </div>

    <div className="w-xl">{/* <TextTab label="Human Shield" /> */}</div>
  </section>
);
