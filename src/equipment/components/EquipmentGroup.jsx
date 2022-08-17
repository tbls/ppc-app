import { EquipmentItem } from './EquipmentItem';

export const EquipmentGroup = ({ grupoDeEquipos = [] }) => {
  // console.log(grupoDeEquipos.List);
  const { List } = grupoDeEquipos;
  console.log(List);

  return (
    <div>
      <h4 className="my-3">{grupoDeEquipos.Name}</h4>
      <div className="row">
        {List.map((equipo, index) => {
          return <EquipmentItem key={index} equipo={equipo} />;
        })}
      </div>
    </div>
  );
};
