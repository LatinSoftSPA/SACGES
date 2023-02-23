import { Button } from "@tremor/react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

import "./styles.css";

const BuscarArchivos = ({ cargado, handleSeleccion, handleUpLoad }) => {
  return (
    <>
      <input
        id="seleccionar"
        name="seleccionar"
        type="file"
        accept=".pdf"
        onChange={handleSeleccion}
      />
      <Button
        type="file"
        value=""
        icon={DocumentCheckIcon}
        iconPosition="left"
        size="xs"
        color={cargado ? "green" : "red"}
        onClick={handleUpLoad}
        marginTop="mt-0"
        // loading={archivos.size === 0 ? true : false}
        // loadingText="Seleccionar Archivo"
      >
        Subir
      </Button>
    </>
  );
};

export default BuscarArchivos;
