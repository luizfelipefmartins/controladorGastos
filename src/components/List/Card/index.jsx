import styles from "../Card/style.module.css";

export const Card = ({ transaction, clearTransation }) => {
  return (
    <>
      {transaction.type === "Entrada" ? (
        <li className={styles.entrada}>
          <h3 className="title">{transaction.description}</h3>
          <span className="parag">{transaction.type}</span>
          <p className="label">R${transaction.value}</p>
          <button className="btnExcluir" onClick={() => clearTransation(transaction.id)}> Excluir
          </button>
        </li>
      ) : (
        <li className={styles.despesa}>
          <h3 className="title">{transaction.description}</h3>
          <span className="parag">{transaction.type}</span>
          <p className="label">R${transaction.value}</p>
          <button className="btnExcluir" onClick={() => clearTransation(transaction.id)}> Excluir
          </button>
        </li>
      )}
    </>
  );
};
