import { Button } from "@tremor/react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

import "./styles.css";

const BuscarArchivos = (props) => {
  const { cargado, modalCrear, modalSubir } = props;
  return (
    <>
      <Button
        type="file"
        value=""
        icon={DocumentCheckIcon}
        iconPosition="left"
        size="xs"
        color={!cargado ? "green" : "red"}
        onClick={modalCrear}
        marginTop="mt-0"
        // loading={archivos.size === 0 ? true : false}
        // loadingText="Seleccionar Archivo"
      >
        Crear
      </Button>
      |
      <Button
        type="file"
        value=""
        icon={DocumentCheckIcon}
        iconPosition="left"
        size="xs"
        color={!cargado ? "blue" : "red"}
        onClick={modalSubir}
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
