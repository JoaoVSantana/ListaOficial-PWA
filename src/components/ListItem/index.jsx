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
      <div className="w-11/12 p-2 bg-orange-200 flex justify-between items-center gap-1 rounded-md md:w-10/12">
        <p className="w-3/5 text-justify break-words" >{props.item.nome}</p>
        <div className="w-2/5 flex justify-end gap-2">
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
