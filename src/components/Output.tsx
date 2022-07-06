import { Text } from "@mantine/core";
import { useGlobalText } from "../hooks/useGlobalText";

export default function Output() {
  const [text] = useGlobalText();

  return <Text>Output: {text}</Text>;
}
