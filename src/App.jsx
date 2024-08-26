import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (inputIdentifier, newValue) => {
    setValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} values={values} />
      <Results values={values} />
    </>
  );
}

export default App;
