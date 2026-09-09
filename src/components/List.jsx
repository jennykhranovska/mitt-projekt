import { useState } from "react";

function List() {
  const [showList, setShowList] = useState(true);

  return (
    <main>
      <h2>Min lista</h2>

      <button onClick={() => setShowList(!showList)}>
        {showList ? "Dölj lista" : "Visa lista"}
      </button>

      {showList && (
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>JavaScript</li>
        </ul>
      )}
    </main>
  );
}

export default List;