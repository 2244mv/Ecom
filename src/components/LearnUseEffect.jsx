import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="mx-auto text-center">
      <h1 className="text-3xl text-center">
        Num {num} Name : {name}
      </h1>
      <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
        Increment
      </button>{" "}
      <br />
      Enter Name{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded"
      />
    </div>
  );
};

export default LearnUseEffect;
