export default function Chute(props){
    const {palavraNoInput, setPalavraNoInput, desabilita, retornaEscrito} = props
    return(
        <div className="inputChutarPalavra">
            <span>Já sei a palavra!!!!</span>
            <input data-identifier="type-guess" value={palavraNoInput} onChange={((e)=>setPalavraNoInput(e.target.value))} disabled={desabilita}></input>
            <button data-identifier="guess-button" onClick={retornaEscrito} disabled={desabilita}>Chutar</button>
          </div>
    )
}