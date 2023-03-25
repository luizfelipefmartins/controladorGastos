import styles from "../TotalMoney/style.module.css";

export const TotalMoney = ({ listTransactions }) => {
  const sumTotal = () => {
    const newTransationPositive = listTransactions.filter(
      (transationPos) => transationPos.type === "Entrada"
    );

    const newTransationNegative = listTransactions.filter(
      (transationNeg) => transationNeg.type === "Despesa"
    );

    const totalPositive = newTransationPositive.reduce(
      (previousValue, positive) => {
        return previousValue + positive.value;
      },
      0
    );

    const totalnegative = newTransationNegative.reduce(
      (previousValue, negative) => {
        return previousValue + negative.value;
      },
      0
    );

    return totalPositive - totalnegative;
  };

  return (
    <>
      <div className={styles.containerTotal}>
        <div className={styles.containerValue}>
          <h3 className="title">Valor Total:</h3>
          <span className="valor">R$ {sumTotal()}</span>
        </div>
        <p className="parag">O valor se refere ao saldo</p>
      </div>
    </>
  );
};
