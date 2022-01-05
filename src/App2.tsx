import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Hourselecter, minuteState } from "./Atom2";
function App2() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hour, setHour] = useRecoilState(Hourselecter);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHour(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hour}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App2;
