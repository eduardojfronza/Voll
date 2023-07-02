import styled from 'styled-components';
import Facebook from './assets/facebook.png';
import Whatsapp from './assets/whatsapp.png';
import Google from './assets/google.png';
import Instagram from './assets/instagram.png';


const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`
const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`
const ItemEstilizado = styled.li`
    list-style-type: none;
    margin-left:10px;
`


function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href='#'>
                        <img src={Facebook} alt='Logo do facebook' />
                    </a>
                </ItemEstilizado>

                <ItemEstilizado>
                    <a href='#'>
                        <img src={Whatsapp} alt='Logo do Whatsapp' />
                    </a>
                </ItemEstilizado>

                <ItemEstilizado>
                    <a href='#'>
                        <img src={Google} alt='Logo do Google' />
                    </a>
                </ItemEstilizado>

                <ItemEstilizado>
                    <a href='#'>
                        <img src={Instagram} alt='Logo do Instagram' />
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2023 Desenvolvido por Eduardo Fronza | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}

export default Rodape