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
  bbd: {
    hoodie: url("bludgeoned-hoodie.webp"),
    shirtFront: url("bludgeoned-shirt-front.webp"),
    shirtBack: url("bludgeoned-shirt-back.webp"),
    longsleeve: url("bludgeoned-ls.webp"),
    tapeLayout: url("bludgeoned-tape-layout.webp"),
    tapeLayoutFront: url("bludgeoned-tape-layout-front.webp"),
    sticker: url("bludgeoned-sticker.webp"),
    promoFlyer: url("bludgeoned-promo.webp"),
  },
} as const;
