import { ColGrid } from "@tremor/react";

import CardsData from "./CardData";
import ChartDonus from "./Charts/Donus";
import AreaChart from "./Charts/Area";

const Index = () => {
  return (
    <>
      <ColGrid
        numColsMd={2}
        numColsLg={4}
        marginTop="mt-6"
        gapX="gap-x-6"
        gapY="gap-y-6"
      >
        <CardsData />
      </ColGrid>

      <ColGrid
        numColsMd={1}
        numColsLg={2}
        marginTop="mt-6"
        gapX="gap-x-6"
        gapY="gap-y-6"
      >
        <AreaChart />
        <ChartDonus />
      </ColGrid>
    </>
  );
};

export default Index;
