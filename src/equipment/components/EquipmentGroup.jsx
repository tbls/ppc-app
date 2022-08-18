import { Row } from 'react-bootstrap';

import { EquipmentItem } from './EquipmentItem';

export const EquipmentGroup = ({ grupoDeEquipos = [] }) => {

	const { List } = grupoDeEquipos;

	return (
		<>
			<h4 className="my-3">{grupoDeEquipos.Name}</h4>
			
			<Row xs={1} md={2} lg={3} className="g-2 mb-2">
				{List.map((equipo, index) => (
				<EquipmentItem key={index} equipo={equipo} />
				))}
			</Row>



		</>
	);
};
