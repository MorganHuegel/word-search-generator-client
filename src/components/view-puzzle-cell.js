import React from 'react';

export default function Cell(props) {
  function toggleSelected() {
    const cell = document.querySelectorAll(`[data-rownum='${props.position.rowNum}'][data-colnum='${props.position.colNum}']`)[0];
    if(!cell.classList.contains('selected')){
      cell.classList.add('selected')
    } else {
      cell.classList.remove('selected')
    }
  }

  return (
    <span className={`puzzle-cell`} style={{
        width:`${100/props.length}%`,
        maxWidth: 30
      }}
      data-rownum={props.position.rowNum}
      data-colnum={props.position.colNum}
      onClick={(e) => toggleSelected()}>
      {props.letter}
    </span>
  )
}