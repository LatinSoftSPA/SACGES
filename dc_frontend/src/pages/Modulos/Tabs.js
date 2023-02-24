import { TabList, Tab } from "@tremor/react";

const Tabs = ({ tabs, selectedView, onValueChange }) => {
  return (
    <TabList
      variant="scrollable"
      defaultValue={selectedView}
      onValueChange={(e) => onValueChange(e)}>
      {tabs.map((tab, i) => {
        const { texto, icono } = tab;
        return <Tab key={i} value={i} text={texto} icon={icono} />;
      })}
    </TabList>
  );
};

export default Tabs;
