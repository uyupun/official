import {client, query, useQuery} from '../lib/apollo';

const TEST = query`
query {
  hoge {
    id
    name
  }
}
`

const Index = () => {

  const {loading, error, data} = useQuery(TEST, {client});

  return (
    <div>
      <div>hoge</div>
      {!loading && data.hoge[0].name}
      {!loading && data.hoge[0].id}
    </div>
  )
};

export default Index;
