export interface IDataPoint {
  timestamp: number;
  emg1: number;
  emg2: number;
  emg3: number;
  emg4: number;
  angle: number;
}

export type StatsType = Omit<IDataPoint, "timestamp"> | number

export interface IDataset {
  id: number;
  name: string;
  stats?: Record<string, StatsType>;
  series?: IDataPoint[];
}

export const enum HeadingStyle {
  ACCENT = "accent",
  BASIC = "",
  ERROR = "error"
}
