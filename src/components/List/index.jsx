import { Card } from "./Card";
import styles from "../List/style.module.css";

export const List = ({ listTransactions, clearTransation }) => {
  return (
    <>
      <div>
        <h1 className="title space">Resumo financeiro</h1>
        {listTransactions.length > 0 ? (
          <ul className={styles.cardContainer}>
            {listTransactions.map((transaction) => {
              return (
                <Card
                  key={transaction.id}
                  transaction={transaction}
                  clearTransation={clearTransation}
                />
              );
            })}
          </ul>
        ) : (
          <p className="titleTwo">Você ainda não possui nenhum lançamento</p>
        )}
      </div>
    </>
  );
};
