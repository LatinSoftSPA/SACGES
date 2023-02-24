import { ProgressBar } from "@tremor/react";

const BarraProgreso = ({ valor, color }) => {
  const label = valor + "%";
  const tooltip = valor + "% Cumplido";
  return (
    <div width="150px">
      <ProgressBar
        percentageValue={valor}
        label={label}
        tooltip={tooltip}
        showAnimation={true}
        color={color}
      />
    </div>
  );
};

export default BarraProgreso;
