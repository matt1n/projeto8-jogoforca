import styled from "styled-components"

export default function Chute(props){
    const {palavraNoInput, setPalavraNoInput, desabilita, retornaEscrito} = props
    return(
        <InputChutarPalavra>
            <span>Já sei a palavra!!!!</span>
            <input data-identifier="type-guess" value={palavraNoInput} onChange={((e)=>setPalavraNoInput(e.target.value))} disabled={desabilita}></input>
            <button data-identifier="guess-button" onClick={retornaEscrito} disabled={desabilita}>Chutar</button>
          </InputChutarPalavra>
    )
}

const InputChutarPalavra = styled.div`
    input{
        margin: 0 20px;
        height: 30px;
        width: 300px;
        margin-bottom: 20px;
    }
    button{
        background-color: rgb(199, 255, 255);
        border: 1px solid rgb(100, 100, 255);
        border-radius: 3px;
        height: 30px;
    }
`