import { ReactNode } from "react";

export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
  punishmentIdea: ReactNode;
  citizenID: ReactNode;
  type: string;
  title: ReactNode;
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string;
};
