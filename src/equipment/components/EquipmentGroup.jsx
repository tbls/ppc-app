import { EquipmentItem } from './EquipmentItem';

export const EquipmentGroup = ({ grupoDeEquipos = [] }) => {
  console.log(grupoDeEquipos.List);
  const { List } = grupoDeEquipos;
  return (
    <div>
      <h4 className="my-3">{grupoDeEquipos.Name}</h4>
      <div className="row">
        {List.map((equipo, index) => {
          return <EquipmentItem key={index} />;
        })}
      </div>
    </div>
  );
};
