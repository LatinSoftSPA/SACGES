import { Card, Flex, Footer, Block, Button, Text, Metric } from "@tremor/react";

const EnConstruccion = ({ bg }) => {
  return (
    <main className={`${bg}`}>
      <Flex marginTop="pb-20">
        <Card maxWidth="max-w-lg" marginTop="mt-80">
          <Block spaceY="space-y-16">
            <Text>Lamentamos las molestias...!!!</Text>
            <Metric marginTop="mt-10">Seccion en construccion...!!!</Metric>

            <Footer height="h-20">
              <Flex justifyContent="justify-end">
                <Button text="See More" size="xs" importance="secondary" />
              </Flex>
            </Footer>
          </Block>
        </Card>
      </Flex>
    </main>
  );
};

export default EnConstruccion;
