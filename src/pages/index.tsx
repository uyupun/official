import {client, query, useQuery} from '../lib/apollo';

const TEST = query`
query {
  person(personID: 4) {
    name
  }
}
`

const Index = () => {

  const {loading, error, data} = useQuery(TEST, {client});

  return (
    <div>
      <div>hoge</div>
      {data.person.name}
    </div>
  )
};

export default Index;
