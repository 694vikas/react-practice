import Temp from "./components/Temp";

function App() {
  return (
    <>
      <div
        className="main-temp"
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "10rem",
        }}
      >
        <Temp></Temp>
      </div>
    </>
  );
}

export default App;
