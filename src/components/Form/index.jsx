import { v4 as uuidv4 } from "uuid";

export const Form = ({ addNmero, transation, setTransation }) => {
  const submit = (event) => {
    event.preventDefault();
    addNmero(transation);
    setTransation({
      description: "",
      value: "",
      type: "",
      id: uuidv4(),
    });
  };

  return (
    <form className="form" onSubmit={(event) => submit(event)}>
      <div className="containerInputs">
        <label className="label">Descrição</label>
        <input
          placeholder="Digite aqui sua descrição"
          type="text"
          value={transation.description}
          onChange={(e) =>
            setTransation({
              ...transation,
              description: e.target.value,
            })
          }
          required
        />
        <span className="label">Ex: Compra de roupas</span>
      </div>
      <div className="containerInputs">
        <label className="label">Valor (R$)</label>
        <input
          placeholder="1"
          type="number"
          value={transation.value}
          onChange={(e) =>
            setTransation({ ...transation, value: e.target.value })
          }
          required
        />
      </div>
      <div className="containerInputs">
        <label className="label">Tipo de valor</label>
        <select
        value={transation.type}
          onChange={(e) =>
            setTransation({ ...transation, type: e.target.value })
          }
        >
          <option value="">Selecione Opção</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button className="btnSubmit" type="submit">Inserir valor</button>
    </form>
  );
};
