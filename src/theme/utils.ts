import { lighten as originalLighten } from "polished";

export const lighten = (color: string) => originalLighten(0.1, color);
