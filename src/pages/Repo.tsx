import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "./Repos";

export function Repo(){
    // pega os parametros enviados pelo router (Link)
    const params = useParams();
    const curretRepository = params['*'] as String;

    //busca o cache armazenado atualmente
    const queryClient = useQueryClient();

    async function handleClickRepositoryDescription(){
        //esse campo invalida o staleTime e faz uma nova requisição para API
        // await queryClient.invalidateQueries(['repos']);

        
        const previousRepos = queryClient.getQueryData<Repository[]>('repos')

        //verifica se existe informações armazenadas em cache
        if(previousRepos){
            const nextRepos = previousRepos.map(repo =>{
                if(repo.full_name === curretRepository){
                    return {...repo, description:'Testando'}
                } else {
                    return repo;
                }
            })
            queryClient.setQueryData('repos', nextRepos)
        }
    }
    return (
        <>
        {curretRepository}
        <button onClick={handleClickRepositoryDescription}>Alterando Descrição</button>
        </>
    );
}