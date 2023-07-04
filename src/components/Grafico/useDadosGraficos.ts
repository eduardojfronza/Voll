import IConsulta from "../../types/IConsulta";
import IProsfissional from "../../types/IProfissional";

interface Props {
    profissionais: IProsfissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}
const useDadosGrafico = ({profissionais,consultas}: Props) => {
    let dados: Array<IDados> = [];

    if (profissionais && consultas) {
        dados = profissionais.map((profissional) => ({
            nome: profissional.nome,
            consultas: consultas.filter((consulta) =>
            consulta.profissional.some((prof) => prof.nome === profissional.nome)
            ).length
        
        }))
    }

    return dados;
}

export default useDadosGrafico

// EXPLICAÇÃO IF: Nesse código estamos atribuindo para a variável dados o valor da lista de profissionais, que passa por cada um deles, com o método map, criando um objeto com nome em cada um. Nesse caso, o nome do profissional e número de consultas.

// Por meio da lista de consultas fazemos um filtro, que cria uma nova lista seguindo a condição que definimos. Nisso será feito a verificação se o nome do profissional que está na consulta é igual o nome do profissional que estamos fazendo a verificação para cada um da lista.

// Por fim, como temos uma linha de consultas com o nome do profissional, precisaremos apenas do número de consultas realizadas. Por isso, o uso do .lenght