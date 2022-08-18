import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setActiveEquipment } from '../../store/equipments/equipmentsSlice';
import { showEquipmentModal } from '../../store/ui/uiSlice';

export const EquipmentItem = ({ equipo }) => {
	const dispatch = useDispatch();
	const { tag, condition, state, observation } = equipo;

	const mostarModalDeEquipos = () => {
		dispatch(setActiveEquipment(equipo));
		dispatch(showEquipmentModal());
	};

	return (
		<Col className='mb-3'>
			<Card
				className="text-center h-100"
			>
			<Card.Header>{tag}</Card.Header>
			<Card.Body>
				<Card.Title>
					{condition} - {state}
				</Card.Title>
				<Button onClick={mostarModalDeEquipos} variant="primary">
					Actualizar
				</Button>
				<Card.Text>{observation}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
			</Card>
		</Col>
	);
};
