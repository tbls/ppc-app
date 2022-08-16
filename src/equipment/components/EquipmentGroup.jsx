import { EquipmentItem } from './EquipmentItem';

export const EquipmentGroup = () => {
  const equipos = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="my-3 text-center">Grupo de Equipos</h1>
      {equipos.map((equipo) => {
        return <EquipmentItem />;
      })}
    </>
  );
};
