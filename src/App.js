import {useState} from "react"
import "./css/reset.css"
import "./css/style.css"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras.js"

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [palavra,setPalavra] = useState('')
  const [palavraOculta, setPalavraOculta] = useState('')
  const [palavraNormalizada, setPalavraNormalizada] = useState('')
  const [classeBotaoLetra, setClasseBotaoLetra] = useState('desabilitado')
  const [teste, setTeste] = useState(true)
  const [palavraEscrita, setPalavraEscrita] = useState('')
  const [letrasClicadas, setletrasClicadas] = useState([])
  const [erros, setErros] = useState([])
  const [imagem, setImagem] = useState(forca0)
  const [palavraNoFim, setPalavraNoFim] = useState('palavraForca')
  const arrayImagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  
  function apertaBotao(indexItemEscolhido){
    const palavraNova = palavras.filter((p, idx)=> idx === indexItemEscolhido)
    const palavraNormal = palavraNova[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    setPalavraNormalizada(palavraNormal)
    setPalavra(palavraNova[0])
    setImagem(forca0)
    setPalavraOculta(palavraNova[0].replace(/[^0]/g ,'_ '))
    console.log(palavraNova[0],palavraNova[0].replace(/[^0]/g ,'_ '))
    setTeste(false)
    setClasseBotaoLetra('')
    setletrasClicadas([])
    setPalavraNoFim('palavraForca')
    setErros([])
  }

  function retornaValor(letra){
    const novaArray=[...letrasClicadas, letra]
    setletrasClicadas(novaArray)
    console.log(novaArray)
    console.log(letra)
    if (palavra.includes(letra)){
      console.log('sim')
      const NovaLetrasClicadas = [...letrasClicadas, letra]
      const palavraDividida = palavraNormalizada.split("")
      const palavraConferida = palavraDividida.map((l)=> NovaLetrasClicadas.includes(l) ? l : "_ ")
      const palavraJunta = palavraConferida.join("")
      setPalavraOculta(palavraJunta)
      if (palavraJunta===palavraNormalizada) {
        setPalavraOculta(palavra)
        setPalavraNoFim(`palavraForca ganhou`)
        setTeste(true)
      }
    } else {
      const novoErro = [...erros, letra]
      setErros(novoErro)
      if (novoErro.length > 0 && novoErro.length<6) {
        setImagem(arrayImagens[novoErro.length])
      } else if (novoErro.length === 6){
        setImagem(forca6)
        setPalavraOculta(palavra)
        setPalavraNoFim(`palavraForca perdeu`)
        setTeste(true)
      }
    }
  }

  function retornaEscrito(){
    // console.log(palavra)
    // console.log(palavraEscrita)
    if (palavraEscrita===palavra || palavraEscrita===palavraNormalizada){
      console.log('hehehehe')
      setPalavraOculta(palavra)
      setPalavraNoFim(`palavraForca ganhou`)
      setTeste(true)
    } else {
      console.log(`perdeu!!!!! a palavra era ${palavra}`)
      setImagem(forca6)
      setPalavraOculta(palavra)
      setPalavraNoFim(`palavraForca perdeu`)
      setTeste(true)
    }
    setPalavraEscrita('')
  }

  return(
    <div className="corpo">
      <div className="forcaBotaoPalavra">
        <img src={imagem} alt="Forca"></img>
        <div className="botaoPalavra">
          <button onClick={()=>apertaBotao(Math.floor(Math.random() * 231))} className="escolherPalavra">Escolher Palavra</button>
          <span className={palavraNoFim}>{palavraOculta}</span>
        </div>
      </div>
      <div className="botoesLetras">
        {alfabeto.map((l) => <button onClick={()=>retornaValor(l)} className={classeBotaoLetra} disabled={letrasClicadas.includes(l) ? true : teste}>{l}</button>)}
      </div>
      <div className="inputChutarPalavra">
        <span>Já sei a palavra!!!!</span>
        <input value={palavraEscrita} onChange={((e)=>setPalavraEscrita(e.target.value))} disabled={teste}></input>
        <button onClick={retornaEscrito} disabled={teste}>Chutar</button>
      </div>
    </div>
  )
}