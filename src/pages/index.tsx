import {useEffect} from 'react';
import {client, query} from '../lib/apollo';

const Index = () => {
  const test = () => {
    client.query({
      query: query`
        query {
          person(personID: 4) {
            name
          }
        }
      `
    }).then(res => {
      console.log(res);
    });
  }

  useEffect(test, []);

  return (
    <div>hopge</div>
  )
};

export default Index;
