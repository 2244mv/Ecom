const TestWrapping = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">TestWrapping</h1>

      <Parent>
        <Child1 />
      </Parent>

      <br />

      <Parent>
        <Child2 />
      </Parent>
    </div>
  );
};

export default TestWrapping;

/* PARENT */
const Parent = ({ children }) => {
  return (
    <>
      <h2 className="text-xl text-center">Parent Component</h2>
      <ul className="text-center">{children}</ul>
    </>
  );
};

/* CHILD 1 */
const Child1 = () => {
  return <li>Child 1</li>;
};

/* CHILD 2 */
const Child2 = () => {
  return <li>Child 2</li>;
};