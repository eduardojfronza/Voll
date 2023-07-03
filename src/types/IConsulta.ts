import IProsfissional from "./IProfissional";

export default interface IConsulta extends IProsfissional{
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProsfissional>, // estamos passando as informações do profissional atraves de uma array
    especialidade: string,
    modalidade: string
}