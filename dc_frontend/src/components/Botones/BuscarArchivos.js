import { useState } from "react";
import { Button } from "@tremor/react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

import "./styles.css";

const initialValues = {
  nombre: "",
  archivo: null,
  size: 0,
  url: "",
};
const BuscarArchivos = (props) => {
  const { cargado, titulo } = props;
  const id = "seleccionar";

  const [archivo, setArchivo] = useState(initialValues);
  const handleSeleccion = (e) => {
    const obj = e.target.files[0];
    setArchivo({ nombre: obj.name, size: obj.size, archivo: obj });
  };

  const handleUpLoad = () => {
    console.log(archivo);
  };
  return (
    <>
      <label htmlFor={id}></label>
      <input
        id={id}
        name="seleccionar"
        type="file"
        accept=".pdf"
        onChange={handleSeleccion}
        aria-labelledby={titulo}
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
