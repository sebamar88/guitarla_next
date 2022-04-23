import Product from "./Product";
import styles from "../styles/Listado.module.css";

const Listado = ({ guitarras }) => {
  return (
    <div className={styles.listado}>
      {guitarras &&
        guitarras.map((guitarra) => (
          <Product {...guitarra} key={guitarra.id} />
        ))}
    </div>
  );
};

export default Listado;
