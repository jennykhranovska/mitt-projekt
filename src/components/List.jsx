import { useState } from "react";

function List() {
  const [showList, setShowList] = useState(true);

  return (
    <main>
      <h2>Min lista</h2>

      <div
        className={showList ? "toggle on" : "toggle"}
        onClick={() => setShowList(!showList)}
      >
        <div className="toggle-circle"></div>
      </div>

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