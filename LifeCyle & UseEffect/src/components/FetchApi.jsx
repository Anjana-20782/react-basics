//cjhild component

import { useEffect, useState } from "react";

function FetchDocument({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;   // avoid fetch when id is empty

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchDocument;
