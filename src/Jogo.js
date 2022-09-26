import Chute from "./Chute"
import Letras from "./Letras"

export default function Jogo(props){
    const {imagem, escolherPalavra, palavraNoFim, palavraOculta, palavraNoInput, setPalavraNoInput, desabilita, retornaEscrito, alfabeto, retornaValor, letrasClicadas} = props
    return(
        <div className="corpo">
          <div className="forcaBotaoPalavra">
            <img data-identifier="game-image" src={imagem} alt="Forca"></img>
            <div className="botaoPalavra">
              <button data-identifier="choose-word" onClick={()=>escolherPalavra(Math.floor(Math.random() * 231))} className="escolherPalavra">Escolher Palavra</button>
              <span data-identifier="word" className={palavraNoFim}>{palavraOculta}</span>
            </div>
          </div>
          <Letras 
          alfabeto={alfabeto}
          retornaValor={retornaValor}
          letrasClicadas={letrasClicadas}
          desabilita={desabilita}
          />
          <Chute 
          palavraNoInput={palavraNoInput}
          setPalavraNoInput={setPalavraNoInput}
          desabilita={desabilita}
          retornaEscrito={retornaEscrito}
          />
        </div>
      )
}