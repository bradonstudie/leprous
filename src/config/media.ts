const BASE = "https://media.bradonstudebaker.com/v1/photos";
const url = (path: string) => `${BASE}/${path}.webp`;

export const MEDIA = {
  shirts: {
    hsShirtFront: url("hs-shirt-front"),
    hsShirtBack: url("hs-shirt-back"),
  },
  flyers: {
    bbdFlyer: url("bbd-flyer"),
    isFlyer: url("is-flyer"),
    pointFlyer: url("point-flyer"),
  },
  immortalTorment: {
    titf: url("titf"),
    logo: url("it-logo"),
    webMock: url("it-web-mock"),
  },
  bbd: {
    hoodie: url("bludgeoned-hoodie"),
    shirtFront: url("bludgeoned-shirt-front"),
    shirtBack: url("bludgeoned-shirt-back"),
    longsleeve: url("bludgeoned-ls"),
    tapeLayout: url("bludgeoned-tape-layout"),
    tapeLayoutFront: url("bludgeoned-tape-layout-front"),
    sticker: url("bludgeoned-stickers"),
    promoFlyer: url("bludgeoned-promo"),
  },
  cleanseTheSoul: {
    logo: url("cleanse-logo"),
    flyer: url("cleanse-flyer"),
  },
  rejoice: {
    shirtFront: url("rejoice-shirt-front"),
    shirtBack: url("rejoice-shirt-back"),
    sticker: url("rejoice-stickers"),
  },
  siteAssets: {
    portrait: url("bradon"),
  },
} as const;
