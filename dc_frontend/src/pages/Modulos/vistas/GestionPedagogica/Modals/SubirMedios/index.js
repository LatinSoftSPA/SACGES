// import { useState } from "react";
import {  Modal } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;


const configProps = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

// const initialValues = {
//     nombre: "",
//     archivo: null,
//     size: 0,
//     url: "",
//   };


const ModalSubirMedios = (props) => {
    const { open, handleOk, handleCancel, loading} = props;


    // const [archivo, setArchivo] = useState(initialValues);
    // const handleSeleccion = (e) => {
    //   const obj = e.target.files[0];
    //   setArchivo({ nombre: obj.name, size: obj.size, archivo: obj });
    // };

    return (
        <Modal 
          title="Subir Medios de Verificación" 
          open={open} 
          onCancel={handleCancel}
          // onOk={() => handleOk(archivo)} 
          onOk={handleOk}
          centered 
          width={600}
          confirmLoading={loading}
          >

          <Dragger {...configProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Haz un Click aqui o Arrastra un archivo hasta Aqui para subir tu evidencia.</p>
            <p className="ant-upload-hint">
              Recuerda que debes subir solamente Archivos PDF de maximo 3MB.
            </p>
          </Dragger>
          
          {/* <label htmlFor="buscarArchivo"></label>
          <input
            id="buscarArchivo"
            name="seleccionar"
            type="file"
            accept=".pdf"
            onChange={handleSeleccion}
            aria-labelledby={"titulo"}
            /> */}
        </Modal>
    );
};
export default ModalSubirMedios;