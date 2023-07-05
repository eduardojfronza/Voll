import styled from "styled-components"
import IProsfissional from "../../types/IProfissional"
import Card from "./Card"
import Botao from "../Botao"

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

function Avaliacao({ profissionais }: { profissionais: IProsfissional[] | null }) {
    return (
        <>
            <SecaoCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SecaoCard>
            <Botao>Ver mais</Botao>
        </>
    )
}

export default Avaliacao