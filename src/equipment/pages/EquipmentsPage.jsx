import { useSelector } from 'react-redux'
import { EquipmentGroup } from '../components/EquipmentGroup';
import { EquipmentModal } from '../components/EquipmentModal';

export const EquipmentsPage = () => {

	const  {equipments}  = useSelector( state => state.equipments );

	console.log(typeof(equipments))
	console.log(equipments[0].Id)
	console.log(equipments)

	let valores = Object.values(equipments)

	console.log(valores)

	return (
		<>
			<h1 className="my-3 text-center">Equipos Principales</h1>
			{
				Object.entries(equipments).forEach(( [index, equipmentGroup]  ) => (
					console.log(equipmentGroup)
					// <EquipmentGroup
					// 	key={ equipmentGroup.Id }
					// 	equipmentList={ equipmentGroup.equipmentList }
					// 	GroupName ={equipmentGroup.Name}
					// />

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



