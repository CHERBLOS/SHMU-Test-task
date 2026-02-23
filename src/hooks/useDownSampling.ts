import { useMemo } from "react";
import type { IDataPoint } from "../types"

export const useDownSampling = (series: IDataPoint[], maxPoints: number) => {
  return useMemo(() => {
    if (!series || series.length === 0) return []

    const step = Math.ceil(series.length / maxPoints)
    const sampledData = step > 1 ? series.filter((_: IDataPoint, idx: number) => idx % step === 0) : series;

    const sampledObj = sampledData.reduce((acc, obj) => {
      acc.angle.push([obj.timestamp, obj.angle])
      acc.emg1.push([obj.timestamp, obj.emg1])
      acc.emg2.push([obj.timestamp, obj.emg2])
      acc.emg3.push([obj.timestamp, obj.emg3])
      acc.emg4.push([obj.timestamp, obj.emg4])
      return acc
    }, {
      'angle': [],
      'emg1': [],
      'emg2': [],
      'emg3': [],
      'emg4': [],
    } as Record<string, [number, number][]>)

    return [
      {
        name: "Angle",
        type: "line", 
        data: sampledObj.angle
      },
      {
        name: "EMG 1",
        type: "line",
        data: sampledObj.emg1
      },
      {
        name: "EMG 2",
        type: "line",
        data: sampledObj.emg2
      },
      {
        name: "EMG 3",
        type: "line",
        data: sampledObj.emg3
      },
      {
        name: "EMG 4",
        type: "line",
        data: sampledObj.emg4
      }
    ]
  }, [series, maxPoints]);
}
