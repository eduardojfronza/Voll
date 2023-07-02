import avaliacao from './assets/avaliacao.png'
import grafico from './assets/grafico.png'
import consulta from './assets/consulta.png'
import React from 'react'
import styled from 'styled-components'

interface Props {
    imagem?: string
    children?: React.ReactNode
}

interface Iimagens {
   avaliacao: string,
   grafico: string,
   consulta: string
}

const SpanEstilizado = styled.span<Props>`
     background-repeat: no-repeat;
     background-position: center;
     background-size:cover;
     width: 25px;
     heigth: 25px;
     background-image ${props => props.imagem ? `url(${props.imagem})` : 'none'}
    // LOGICA: vai pegar as coisas que foram enviadas para ela e "perguntar": props.imagem existe? se sim vai pegar a url da imagem e imprimir. Se não fica ficar none, ou seja, sem imagem.
`
const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`
const ContainerEstilizado = styled.div`
    display:flex;
    algin-items: center;
`

function Titulo ({ imagem, children }:Props){

    const listaDeImagem: Iimagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return(
        <ContainerEstilizado>
            {imagem&&<SpanEstilizado imagem={listaDeImagem[imagem as keyof Iimagens]}/>}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo

{/* {imagem&&...} serve para garantir que o span so seja impresso se a imagem tiver sido enviado algum valor para ele */}

{/* imagem={listaDeImagem[imagem as keyof Iimagens]}: entro dentro da lista e procura a que tem o indice com o valor do nome  da imagem */}

{/* quando usamos 'as keyof ...'  está afirmando que o valor que ele está recebendo é o indice de alguma coisa dentro da lista*/}