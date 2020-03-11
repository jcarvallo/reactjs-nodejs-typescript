import React from 'react';
import TableList from './Table';



const App: React.FC = () => {

  let data = [
    { id: 1, firstname: 'Mark', lastname: 'Otto', username: '@mdo' },
    { id: 2, firstname: 'Jacob', lastname: 'Thornton', username: '@fat' }, 
    { id: 3, firstname: 'Larry', lastname: 'the Bird', username: '@twitter' }
  ]

  return (
    <>
      <TableList data={data} />
    </>
  );
}

export default App;
