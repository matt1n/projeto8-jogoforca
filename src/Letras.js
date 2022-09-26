import styled from "styled-components"

export default function Letras(props){
    const {alfabeto, retornaValor, letrasClicadas, desabilita} = props
    return(
        <BotoesLetras>
            {alfabeto.map((l,index) => 
            <BotaoLetra 
                data-identifier="letter" 
                onClick={()=>retornaValor(l)} key={index} 
                className={letrasClicadas.includes(l)||desabilita===true ? "desabilitado" : "habilitado"} 
                disabled={letrasClicadas.includes(l) ? true : desabilita}
                contemEmClicadas={letrasClicadas.includes(l)}
                desabilita={desabilita}
                >
                    {l.toUpperCase()}
                </BotaoLetra>)}
          </BotoesLetras>
    )
}

const BotoesLetras = styled.div`
    width: 650px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`
const BotaoLetra = styled.button`
    width: 40px;
    height: 40px;
    margin: 4px 4px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.671);
    background-color: ${props=> props.contemEmClicadas===true || props.desabilita===true ? "rgb(207, 207, 207)" : "#a6f5ff9c"};
    border: ${props=> props.contemEmClicadas===true || props.desabilita===true ? "none" : "1px solid #525eff98"};
`