import { Container, Stack } from "@mantine/core";
import { QueryClientProvider } from "react-query";

import client from "./client";

import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  return (
    <QueryClientProvider client={client}>
      <Container>
        <Stack>
          <Input />
          <Output />
        </Stack>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
