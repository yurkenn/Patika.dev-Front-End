import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  console.log(location);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <Link to={`/users/${Number(id) + 1}`}>Sonraki kullanci</Link>
        </>
      )}
    </div>
  );
}

export default UserDetail;
