import Chute from "./Chute"
import Letras from "./Letras"
import styled from "styled-components"

export default function Jogo(props){
    const {imagem, escolherPalavra, palavraNoFim, palavraOculta, palavraNoInput, setPalavraNoInput, desabilita, retornaEscrito, alfabeto, retornaValor, letrasClicadas} = props
    return(
        <Corpo>
          <ForcaBotaoPalavra>
            <img data-identifier="game-image" src={imagem} alt="Forca"></img>
            <BotaoPalavra>

              <EscolherPalavra 
                data-identifier="choose-word" 
                onClick={()=>escolherPalavra(Math.floor(Math.random() * 231))}>
                    Escolher Palavra
              </EscolherPalavra>

              <PalavraForca 
                data-identifier="word" 
                estadoFinal={palavraNoFim}>
                    {palavraOculta}
              </PalavraForca>
                
            </BotaoPalavra>
          </ForcaBotaoPalavra>
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
        </Corpo>
      )
}

const Corpo = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction:column;
    align-items: center;
    border: 3px solid black;
    background-color: #ffffff;
`
const ForcaBotaoPalavra = styled.div`
    display: flex;
    margin-bottom: 50px;
    min-width: 900px;
    margin: 20px;
    img{
        width: 400px;
    }
`
const BotaoPalavra = styled.div`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 100px;
`
const EscolherPalavra = styled.button`
    width: 250px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: green;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
`

const PalavraForca = styled.span`
    font-size: 45px;
    font-weight: 700;
    color: ${props=> props.estadoFinal.includes("ganhou") === true ? "green" : props.estadoFinal.includes("perdeu") === true ? "red" : "black"} ; 
`