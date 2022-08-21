import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';

import { hideEquipmentModal } from '../../store/ui/uiSlice';
import {
  removeActiveEquipment,
  updateCondition,
  updateState,
} from '../../store/equipments/equipmentsSlice';

export const EquipmentModal = () => {
  const { isEquipmentModalVisible } = useSelector((state) => state.ui);
  const { activeEquipment } = useSelector((state) => state.equipments);
  const dispatch = useDispatch();

  const conditionOptions = [
    { value: 'operativo', label: 'Operativo' },
    {
      value: 'operativoConObservaciones',
      label: 'Operativo con observaciones',
    },
    { value: 'inoperativo', label: 'Inoperativo' },
  ];

  const onConditionChange = (value) => {
    dispatch(updateCondition(value));
  };

  const stateOptions = [
    { value: 'E/S', label: 'E/S' },
    { value: 'S/B', label: 'S/B' },
    { value: 'F/S', label: 'F/S' },
  ];

  const onStateChange = (value) => {
    dispatch(updateState(value));
  };

  const ocultarModalDeEquipos = () => {
    dispatch(hideEquipmentModal());
    dispatch(removeActiveEquipment());
  };
  const { tag, condition, state, observations = [] } = activeEquipment;

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
              <Select
                className="text-center"
                options={conditionOptions}
                onChange={onConditionChange}
                value={condition}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <Select
                className="text-center"
                options={stateOptions}
                onChange={onStateChange}
                value={state}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Observaciones</Form.Label>
              {observations.map((observation, index) => (
                <div key={index} className="d-flex gap-1 mb-1">
                  <Form.Control
                    className="w-75 text-center"
                    // as="textarea"
                    type="input"
                    rows={2}
                    value={observation.description}
                    readOnly
                  />
                  <Form.Control
                    className="w-25 text-center"
                    type="number"
                    rows={3}
                    value={observation.aviso}
                    readOnly
                  />
                </div>
              ))}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ocultarModalDeEquipos}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={ocultarModalDeEquipos}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
