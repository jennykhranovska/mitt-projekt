import { useState } from "react";

function ClickButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="click-button"
        onClick={() => setCount(count + 1)}
      >
        Klicka mig
      </button>

      <p>Antal klick: {count}</p>
    </div>
  );
}

export default ClickButton;