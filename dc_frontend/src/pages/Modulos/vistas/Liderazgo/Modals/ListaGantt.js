import { Descriptions, Modal } from "antd";

const ListaGantt = ({ gantt, isModalOpen, handleCancel }) => {
  console.log(gantt);
  return (
    gantt && (
      <Modal title="LISTA GANTT" open={isModalOpen} onCancel={handleCancel}>
        <Descriptions
          title="Lista Gantt"
          layout="vertical"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Fecha inicio">
            {gantt.fechaInicio}
          </Descriptions.Item>
          <Descriptions.Item label="Fecha termino">
            {gantt.fechaFin}
          </Descriptions.Item>
          <Descriptions.Item label="Nombre">{gantt.nombre}</Descriptions.Item>
          <Descriptions.Item label="Responsable">
            {gantt.responsable}
          </Descriptions.Item>
          <Descriptions.Item label="Descripcion">
            {gantt.descripcion}
          </Descriptions.Item>
          <Descriptions.Item label="Editar">Editar</Descriptions.Item>
          <Descriptions.Item label="Eliminar">Eliminar</Descriptions.Item>
        </Descriptions>
      </Modal>
    )
  );
};

export default ListaGantt;
