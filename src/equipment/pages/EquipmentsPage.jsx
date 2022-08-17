import { useSelector } from 'react-redux';
import { EquipmentGroup } from '../components/EquipmentGroup';
import { EquipmentModal } from '../components/EquipmentModal';

export const EquipmentsPage = () => {
  const { equipments } = useSelector((state) => state.equipments);

  return (
    <>
      <h1 className="my-3 text-center">Equipos Principales</h1>
      {
        equipments.map((equipment, index) => (
          <EquipmentGroup key={equipment.Id} grupoDeEquipos={equipment} />
        ))

        // Object.entries(perro).forEach(([key, value]) => {
        // 	console.log(value)
        //  });
      }
      {/* <EquipmentGroup groupTitle={'Sistema de Refrigeración'} />
			<EquipmentGroup groupTitle={'Hornos de Hot Oil'} /> */}
      <EquipmentModal />
    </>
  );
};
