import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setActiveEquipment } from '../../store/equipments/equipmentsSlice';
import { showEquipmentModal } from '../../store/ui/uiSlice';

export const EquipmentItem = ({ equipo }) => {
  const dispatch = useDispatch();

  const { tag, condition, state, observations = [] } = equipo;

  const mostarModalDeEquipos = () => {
    dispatch(setActiveEquipment(equipo));
    dispatch(showEquipmentModal());
  };

  return (
    <Col className="mb-3">
      <Card className="text-center h-100">
        {/* <Card.Header></Card.Header> */}
        <Card.Body>
          <Card.Title>{tag}</Card.Title>
          <Card.Text>
            {condition.label} - {state.label}
          </Card.Text>
          <Button onClick={mostarModalDeEquipos} variant="primary">
            Actualizar
          </Button>
          <hr />
          {observations.map((observation, index) => (
            <Card.Text key={index}>
              <small>
                {observation.description} - {observation.aviso}
              </small>
            </Card.Text>
          ))}
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Col>
  );
};
