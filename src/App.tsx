import axios from 'axios';
import {useQuery} from 'react-query';
//faz uma revalidação dos dados na tela, detecta quando o usuário volta para tela e atualiza caso necessário

type Repository = {
  full_name: string;
  description: string;
  name: string;
}

function App() {
  const {data, isFetching} = useQuery<Repository[]>('repos',async ()=>{
    const response = await axios.get('https://api.github.com/users/sthephanyel/repos')
    return response.data;
  });

  return (
    <div>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {data?.map((user,key) =>{
          return(
            <li key={key}>
              <strong>{user.full_name}</strong>
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

export default App
