import { useState } from "react";

function ToggleSwitch() {
  const [on, setOn] = useState(false);

  return (
    <div
      className={on ? "toggle on" : "toggle"}
      onClick={() => setOn(!on)}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setOn(!on);
        }
      }}
    >
      <div className="toggle-circle" />
    </div>
  );
}

export default ToggleSwitch;