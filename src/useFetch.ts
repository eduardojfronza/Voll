import { useEffect, useState } from "react";

export default function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`).then(
            resposta => resposta.json()
        ).then(dados => setDados(dados)).catch((erro => setErro(erro)))
    }, [url])

    return { dados, erro }

}

// LINHA 4 - usando o 'useState' para escpecificar que o estado vai ter um tipo generico que declaramos como 't' ou 'null'. Para especificar o 'null' usamos |, e dentro dos paranteses estamos especificando o null para dizer que é o valor inicial que esse estado vai ter

// LINHA 8:11 - usando useEffect que é um hook para fazer algo depois do carregamento da pagina. Dentro do useEffect usamos o metodo fetch para fazer a requisão na API, nesse caso, procurando a URL que precisa para fazer a requisão. Para poder receber esse valor usamos das props ({url}: {url:string} que foram definidas no inicio da função.

// LINHA 11: pegamos o valor ja convertido da resposta e envia para setDados, ou seja, aquele variavel que era dados antes ela vai ter o valor do que retornar da requisição. Apos isso colocamos o .catch para caso retorne algum, se tiver algum erro ele vai mudar o valor da varivael erro.

// LINHA 13: colocamos em [] o valor da URL porque queremos que está requisição aconteca somente quando o valor da URL mudar e não fique repetindo varias vezes