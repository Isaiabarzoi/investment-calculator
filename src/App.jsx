import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
  const saveUserInput = (userInput) => {
    const input = userInput;
    console.log(input);
  };

  return (
    <>
      <Header />
      <UserInput onSaveInput={saveUserInput} />
      <ResultsTable />
    </>
  );
}

export default App;
