import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon="fa-solid fa-trash" />;

function ListItem(props) {

  function handleClick() {
    props.removerItem(props.index);
  }

  return (
    <>
      <div className="px-6 py-3 bg-orange-200 flex justify-between items-center gap-4 rounded-md">
        <p className="w-40 text-justify break-words" >{props.item.nome}</p>
        <div className="flex gap-4">
          <div className='w-24 h-8 flex justify-between items-center bg-white border-2 border-orange-500 rounded-lg '>
            <button className='w-1/4 h-full bg-orange-500 text-white border-r-2 border-orange-500' onClick={() => {props.alterarQuantidade(props.index, "-")}}>-</button>
            <p>{props.item.quantidade}</p>
            <button className='w-1/4 h-full bg-orange-500 text-white border-l-2  border-orange-500' onClick={() => {props.alterarQuantidade(props.index, "+")}}>+</button>
          </div>
          <button onClick={() => handleClick()} className="text-orange-700 hover:text-orange-400"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    </>
  )
}

export default ListItem
