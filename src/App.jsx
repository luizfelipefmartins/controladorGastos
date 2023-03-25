import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import "./styles/index.css"


function App() {
  const [listTransactions, setlistTransactions] = useState([]);

  const [transation, setTransation] = useState({
    description: "",
    value: "",
    type: "",
    id: uuidv4(),
  });

  const addNmero = (transation) => {
    const newValue = {
      ...transation,
      value: Number(transation.value),
    };
    setlistTransactions([...listTransactions, newValue]);
  };

  const clearTransation = (transationId) => {
    const newList = listTransactions.filter((list) => list.id != transationId);
    setlistTransactions(newList);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="containerOne">
          <Form
            addNmero={addNmero}
            transation={transation}
            setTransation={setTransation}/>
          
          <TotalMoney listTransactions={listTransactions}/>
        </div>
        <List
          listTransactions={listTransactions}
          clearTransation={clearTransation}/>
      </main>
    </div>
  );
}

export default App;
