import React from "react";

export default function Attributes(props) {
  const { character } = props;
  return (
    <div className="attributes-container">
      <p>Gênero: {character.gender == 'Male' ? 'Masculino' : 'Feminino'}</p>
      <p>Espécie: {character.species == 'Human' ? 'Humano' : character.species}</p>
      <p>Status: {character.status == 'Alive' ? 'Vivo' : character.status}</p>
    </div>
  );
}
