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
} as const;
