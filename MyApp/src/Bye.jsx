function Bye() {

  const fruits = ["Apple", "Banana", "Mango", "Grapes"];

  return (
    <>
      <h1 className="text-red-500">All Type of fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default Bye;
