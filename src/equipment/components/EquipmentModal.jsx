import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { hideEquipmentModal } from '../../store/ui/uiSlice';

export const EquipmentModal = () => {
  const { isEquipmentModalVisible } = useSelector((state) => state.ui);
  const { activeEquipment } = useSelector((state) => state.equipments);
  const dispatch = useDispatch();

  console.log(activeEquipment);

  const ocultarModalDeEquipos = () => {
    dispatch(hideEquipmentModal());
  };
  const { tag, condition, state } = activeEquipment;

  return (
    <>
      <Modal show={isEquipmentModalVisible} onHide={ocultarModalDeEquipos}>
        <Modal.Header closeButton>
          <Modal.Title>{tag}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ocultarModalDeEquipos}>
            Close
          </Button>
          <Button variant="primary" onClick={ocultarModalDeEquipos}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
