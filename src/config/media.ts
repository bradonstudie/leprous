const BASE = "https://media.bradonstudebaker.com/v1/photos";
const url = (path: string) => `${BASE}/${path}`;

export const MEDIA = {
  shirts: {
    hsShirtFront: url("hs-shirt-front.webp"),
    hsShirtBack: url("hs-shirt-back.webp"),
  },
  flyers: {
    bbdFlyer: url("bbd-flyer.webp"),
    isFlyer: url("is-flyer.webp"),
    pointFlyer: url("point-flyer.webp"),
  },
  immortalTorment: {
    titf: url("titf.webp"),
    logo: url("it-logo.webp"),
    webMock: url("it-web-mock.webp"),
  },
} as const;
