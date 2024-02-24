import { useState, useEffect, useMemo } from 'react'

import ListItem from './components/ListItem'

function App() {
  const [nomeItem, setNomeItem] = useState("");
  const [qtdItem, setQtdItem] = useState(0);
  const [lista, setLista] = useState(JSON.parse(localStorage.getItem("lista") || "[]") || []);

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify([...lista]));
  }, [lista])

  function removerItem(index) {
    let novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista([...novaLista]);
  }

  function adicionarItemLista() {
    if (nomeItem.length <= 0) {
      alert("O campo nome não pode estar vazio!");
      return;
    }

    if (qtdItem <= 0) {
      alert("A quantidade deve ser maior que 0!");
      return;
    }

    let novaLista = [...lista];
    novaLista.push({ "nome": nomeItem, "quantidade": qtdItem });

    document.getElementById("nameInput").value = "";
    setNomeItem("");
    document.getElementById("quantityInput").value = "";
    setQtdItem(0);
    document.getElementById("nameInput").focus();

    setLista([...novaLista])
  }

  function alterarQuantidade(index, operacao) {
    let novaLista = [...lista];
    novaLista.forEach((item, i) => {
      if (i == index) {
        if ((item.quantidade >= 1 && operacao == "+") || (item.quantidade > 1 && operacao == "-")) {
          item.quantidade = eval((item.quantidade + operacao + 1).toString());
        } else {
          alert("A quantidade deve ser maior que 0!")
        }
      }
    });
    setLista([...novaLista]);
  }

  const mostrarLista = useMemo(() => {
    return (
      lista.map((item, i) => {
        return <ListItem item={item} key={i} index={i} removerItem={removerItem} alterarQuantidade={alterarQuantidade} />
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
      <div className='w-full min-h-screen flex flex-col items-center py-5 gap-4 bg-orange-100'>
        <h1 className='text-center text-2xl font-bold text-orange-700 mb-6 p-2' >Minha lista de compras - Em PWA!</h1>


        <input className='w-64 p-1 text-sm rounded bg-orange-50 outline-orange-600 border-2 border-orange-400' type="text" id='nameInput' placeholder='Item' onChange={alterarNomeItem} />

        <input className='w-32 p-1 text-sm rounded bg-orange-50 outline-orange-600 border-2 border-orange-400' type="number" id='quantityInput' placeholder='Quantidade' onChange={alterarQtdItem} onKeyDown={(evt) => ["e", "E", "+", "-","."].includes(evt.key) && evt.preventDefault()} />


        <button className='py-2 px-4 text-sm text-white rounded-lg  bg-orange-600 hover:bg-orange-400 transition duration-200' onClick={() => adicionarItemLista()}>Adicionar à lista</button>
        <button className='py-2 px-4 text-sm text-white rounded-lg  bg-orange-600 hover:bg-orange-400 transition duration-200' onClick={() => setLista([])}>Limpar lista</button>

        <div className='w-full flex flex-col gap-4 items-center'>
          {mostrarLista}
        </div>

      </div>
    </>
  )
}

export default App
