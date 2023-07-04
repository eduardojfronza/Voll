import IProsfissional from "./types/IProfissional"
import useFetch from "./useFetch"


const useDadosProfissional = () => {
    return useFetch<IProsfissional[]>
    (
        {url: 'profissionais'}
    );
}

export default useDadosProfissional