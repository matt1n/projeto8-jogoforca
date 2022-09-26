export default function Letras(props){
    const {alfabeto, retornaValor, letrasClicadas, desabilita} = props
    return(
        <div className="botoesLetras">
            {alfabeto.map((l,index) => <button data-identifier="letter" onClick={()=>retornaValor(l)} key={index} className={letrasClicadas.includes(l)||desabilita===true ? "desabilitado" : "habilitado"} disabled={letrasClicadas.includes(l) ? true : desabilita}>{l.toUpperCase()}</button>)}
          </div>
    )
}