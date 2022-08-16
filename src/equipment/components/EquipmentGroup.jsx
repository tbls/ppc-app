import { EquipmentItem } from './EquipmentItem';

export const EquipmentGroup = ({ groupTitle }) => {
  const equipos = [1, 2, 3, 4, 5];

  return (
    <div>
      <h4 className="my-3">{groupTitle}</h4>
      <div className="row">
        {equipos.map((equipo) => {
          return <EquipmentItem />;
        })}
      </div>
    </div>
  );
};
