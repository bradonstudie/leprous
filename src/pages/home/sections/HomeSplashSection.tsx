import sphereGif from "../../../assets/sphere.gif";

export const HomeSplashSection = () => (
  <div className="flex-1 flex items-center justify-center md:pb-20 pb-32">
    <div className="relative max-w-lg w-full">
      <img src={sphereGif} alt="" aria-hidden="true" className="w-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mix-blend-hard-multiply mt-3">
        <h2 className="uppercase bg-black text-2xl px-2">"Welcome"</h2>
        <p className="uppercase bg-black px-2 mt-1">
          This website is the digital archive of Bradon Studebaker
        </p>
        <p className="uppercase bg-black px-2 mt-1">Updated 2026-05-6</p>
        <p className="uppercase bg-black px-2 mt-1">↓</p>
      </div>
    </div>
  </div>
);
