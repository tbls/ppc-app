import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';

import { hideEquipmentModal } from '../../store/ui/uiSlice';

export const EquipmentModal = () => {
  const { isEquipmentModalVisible } = useSelector((state) => state.ui);
  const { activeEquipment } = useSelector((state) => state.equipments);
  const dispatch = useDispatch();

  const conditionOptions = [
    { value: 'Operativo', label: 'Operativo' },
    {
      value: 'Operativo con observaciones',
      label: 'Operativo con observaciones',
    },
    { value: 'Inoperativo', label: 'Inoperativo' },
  ];

  const stateOptions = [
    { value: 'E/S', label: 'E/S' },
    { value: 'S/B', label: 'S/B' },
    { value: 'F/S', label: 'F/S' },
  ];

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
              <Form.Label>Condición</Form.Label>
              <Select options={conditionOptions} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <Select options={stateOptions} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Observación</Form.Label>
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
