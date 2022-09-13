import React, { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return <>{users && users.map((u) => <h1>{u.name}</h1>)}</>;
}
