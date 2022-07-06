import { useQuery } from "react-query";
import client from "../client";

export const useRQSGlobalState = <T>(key: string, initialData: T) =>
  [
    useQuery(key, () => initialData, {
      enabled: false,
      initialData,
    }).data,
    (value: T) => client.setQueryData(key, value),
  ] as const;
