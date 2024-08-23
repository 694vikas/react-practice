// import Product from "./components/Product";

import Card from "./components/Card";

function App() {
  const product = [
    {
      pid: 1,
      title: "Nirma",
      date: 10,
      month: "May",
      Year: 2024,
    },
    {
      pid: 2,
      title: "Surf Excel",
      date: 11,
      month: "May",
      Year: 2024,
    },
    {
      pid: 3,
      title: "Areial",
      date: 12,
      month: "May",
      Year: 2024,
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-3xl underline  font-bold ">Item Listed Below</h1>
      </div>

      <div className="main-div flex bg-blue-600 w-2/4 mx-auto mt-2 border-4 border-slate-500 justify-between">
        <div className="bg-yellow-500 ">
          <Card date={product}></Card>
          <Card date={product}></Card>
        </div>
      </div>
    </>
  );
}

export default App;
