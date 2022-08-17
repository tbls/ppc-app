import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setActiveEquipment } from '../../store/equipments/equipmentsSlice';
import { showEquipmentModal } from '../../store/ui/uiSlice';

export const EquipmentItem = ({ equipo }) => {
  const dispatch = useDispatch();
  const { tag, condition, state } = equipo;

  const mostarModalDeEquipos = () => {
    dispatch(setActiveEquipment(equipo));
    dispatch(showEquipmentModal());
  };

  return (
    <div className="mx-auto col-8 col-sm-6 col-md-4 col-lg-3 my-2">
      <Card className="text-center">
        {/* <Card.Header>PAY-5830</Card.Header> */}
        <Card.Body>
          <Card.Title>{tag}</Card.Title>
          <Card.Text>
            {condition} - {state}
          </Card.Text>
          <Button onClick={mostarModalDeEquipos} variant="primary">
            Actualizar
          </Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </div>
  );
};
