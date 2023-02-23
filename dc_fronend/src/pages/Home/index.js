import { Title, Text } from "@tremor/react";

import VistaPrincipal from "./vistas/Principal";

const Home = ({ bg }) => {
  return (
    <main className={`${bg} p-6 sm:p-10`}>
      <Title color="blue" marginTop="mt-20">
        Home
      </Title>
      <Text color="slate" truncate={false} height="h-6">
        Panel Informativos SACGes
      </Text>
      <VistaPrincipal />
    </main>
  );
};

export default Home;
