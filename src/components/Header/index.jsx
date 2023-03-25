import NuKenzie from "../../assets/Nu Kenzie.svg"
import styles from "../Header/style.module.css"

export const Header = () => {

    return (
        <div className={styles.containerHeader}>
            <img className={styles.imgLogo} src={NuKenzie} alt="Nu Kenzie" />
        </div>
    )
}