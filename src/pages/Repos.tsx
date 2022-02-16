import axios from 'axios';
import {useQuery} from 'react-query';
import { Link } from 'react-router-dom';
//faz uma revalidação dos dados na tela, detecta quando o usuário volta para tela e atualiza caso necessário

export type Repository = {
  full_name: string;
  description: string;
  name: string;
}

export function Repos() {
  const {data, isFetching} = useQuery<Repository[]>('repos',async ()=>{
    const response = await axios.get('https://api.github.com/users/sthephanyel/repos')
    return response.data;
  },{
      //cria um tempo de consumo da API, apenas após 1 minuto, será solicitado uma nova requisição para o BD
      staleTime:1000 * 60, //1 minuto
  });

  return (
    <div>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {data?.map((user,key) =>{
          return(
            <li key={key}>
              <Link to={`repos/${user.full_name}`}>{user.full_name}</Link>
              <p>{user.name}</p>
              <p>{user.description}</p>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  )
}