
import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
  name: string;
}

function App() {
  const {data: repositories, isFetching} = useFetch<Repository[]>('https://api.github.com/users/sthephanyel/repos');

  return (
    <div>
      <ul>
        {isFetching && <p>CArregando...</p>}
        {repositories?.map((user,key) =>{
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
