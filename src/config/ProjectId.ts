const ProjectId = {
  BLUDGEONED_BY_DEFORMITY: "bludgeoned-by-deformity",
  CLEANSE_THE_SOUL: "cleanse-the-soul",
  FLYER_SERIES: "flyer-series",
  HUMAN_SHIELD: "human-shield",
  IMMORTAL_TORMENT: "immortal-torment",
} as const;

export type PROJECT_ID = (typeof ProjectId)[keyof typeof ProjectId];
