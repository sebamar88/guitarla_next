import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import Link from "next/link";
import { useState } from "react";

const Guitarra = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const [added, setAdded] = useState(false);
  const { nombre, description, image, price, id } = guitarra[0];

  const handdleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }
    const guitarraSeleccionada = {
      id,
      imagen: image.url,
      nombre,
      precio: price,
      cantidad,
    };
    setAdded(true);
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout page={`Guitarra ${nombre}`}>
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
          <form className={styles.formulario} onSubmit={handdleSubmit}>
            <label htmlFor="qt">Cantidad:</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input type="submit" value="Agregar al Carrito" />
            {added && (
              <>
                <p className={styles.added}>
                  Producto agregado al carrito, ir al carrito en el siguiente
                  enlace
                </p>
                <Link href="/carrito">
                  <a className={styles.enlace}>Ir al carrito</a>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  return {
    props: { guitarra },
  };
}

export default Guitarra;
