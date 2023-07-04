import IConsulta from "./types/IConsulta"
import useFetch from "./useFetch"

const useDadosConsulta = () => {
    return useFetch<IConsulta[]>
    (
        {url:'consultas'}
    );
}

export default useDadosConsulta;

// essa const  vai fazer um useFetch que é nossa função de fazer conexão com API apartir daquele paramatro que estamos passando que é o '{url:'consultas'}'. E já estamos informando que tudo que acontece ali dentro é no formato IConsulta e depois retorna todos esses dados onde nos usarmos a variavel useDadosConsulta.