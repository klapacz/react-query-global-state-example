import { TextInput } from "@mantine/core";
import { useGlobalText } from "../hooks/useGlobalText";

export default function Input() {
  const [text, setText] = useGlobalText();

  return (
    <TextInput
      label="Input"
      value={text}
      onChange={(event) => setText(event.currentTarget.value)}
    />
  );
}
