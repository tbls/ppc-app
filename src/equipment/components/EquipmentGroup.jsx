import { EquipmentItem } from './EquipmentItem';

export const EquipmentGroup = ({ equipmentGroup }) => {

  console.log(equipmentGroup)

  return (
    <div>
      <h4 className="my-3">Nombre</h4>
      <div className="row">
        {/* {
          equipmentGroup.map((equipo , index) => {
            return (
            <EquipmentItem
              key={ index }
              equipo={ equipo }
            />
            );
          })
        } */}
      </div>
    </div>
  );
};
