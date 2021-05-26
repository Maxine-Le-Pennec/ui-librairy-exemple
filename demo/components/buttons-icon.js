import React from "react";
import {CheckCircle, Settings, Trash2, ArrowLeftCircle} from 'react-feather'

import Button from 'library-exemple/Button';

function SimpleButtonsIcon() {
return (
  <div>
  <h2>Boutons avec icone</h2>

  <Button theme='primary' icon={<CheckCircle />}>Valider</Button>
  <Button theme='secondary' icon={<Settings />}>Options</Button>
  <Button theme='disable' icon={<ArrowLeftCircle />}>Retour</Button>
  <Button theme='warning' icon={<Trash2 />}>Supprimer</Button>

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

export default SimpleButtonsIcon

