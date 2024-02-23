import { useState, useEffect, useMemo } from 'react'
import './App.css'

import ListItem from './components/ListItem'

function App() {
  const [nomeItem, setNomeItem] = useState("");
  const [qtdItem, setQtdItem] = useState(0);
  const [lista, setLista] = useState(JSON.parse(localStorage.getItem("lista") || "[]") || []);

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify([...lista]));
  }, [lista])

  function removerItem(index){
    let novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista([...novaLista]);
  }

  function adicionarItemLista() {
    let novaLista = [...lista];
    novaLista.push({"nome": nomeItem, "quantidade": qtdItem});
    setLista([...novaLista])
  }

  const mostrarLista = useMemo(() => {
    return(
      lista.map((item, i) => {
        return <ListItem item={item} key={i} index={i} removerItem={removerItem}/>
      })
    )
  })

  function alterarNomeItem() {
    setNomeItem(document.getElementById("nameInput").value)
  }

  function alterarQtdItem() {
    setQtdItem(parseInt(document.getElementById("quantityInput").value))
  }

  return (
    <>
      <div>
        <input type="text" id='nameInput' placeholder='Digite o nome do item' onChange={alterarNomeItem} />

        <input type="number" id='quantityInput' placeholder='Digite a quantidade desse item' onChange={alterarQtdItem} />

        <button onClick={() => adicionarItemLista()}>Adicionar à lista</button>

        {mostrarLista}

      </div>
    </>
  )
}

export default App
