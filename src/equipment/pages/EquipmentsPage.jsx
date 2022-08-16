import { EquipmentGroup } from '../components/EquipmentGroup';

export const EquipmentsPage = () => {
  return (
    <>
      <h1 className="my-3 text-center">Equipos Principales</h1>
      <EquipmentGroup groupTitle={'Bombas de Hot Oil'} />
      <EquipmentGroup groupTitle={'Sistema de Refrigeración'} />
      <EquipmentGroup groupTitle={'Hornos de Hot Oil'} />
    </>
  );
};
