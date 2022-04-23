import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.css";

const Product = ({ nombre, description, image, price, url }) => {
  return (
    <div className={styles.guitarra}>
      <div className="contenedor-img">
        <Image
          src={image.url}
          alt={nombre}
          layout="responsive"
          width={180}
          height={350}
          priority={true}
        />
      </div>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
