import { useRQSGlobalState } from "./useRQGlobalState";

export const useGlobalText = () => useRQSGlobalState("global-text", "");
