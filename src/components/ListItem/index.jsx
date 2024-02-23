import { useState, useEffect } from 'react'

function ListItem(props) {

  function handleClick() {
    props.removerItem(props.index);
  }

  return (
    <>
      <div>
        <span>{props.item.nome}</span>
        <span>{props.item.quantidade}</span>
        <button onClick={() => handleClick()}>remover</button>
      </div>
    </>
  )
}

export default ListItem
