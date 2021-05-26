import React from "react";

import Button from 'library-exemple/Button';

function SimpleButton() {
return (
  <div>
  <h2>Boutons</h2>

  <Button theme='primary'>Valider</Button>
  <Button theme='secondary'>Options</Button>
  <Button theme='disable'>Retour</Button>
  <Button theme='warning'>Supprimer</Button>

  <style jsx>{`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
  `}</style>
  </div>
)
}

export default SimpleButton

