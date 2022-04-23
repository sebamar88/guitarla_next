import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCarrito = carrito.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
    setTotal(totalCarrito);
  }, [carrito]);

  return (
    <Layout page="Carrito">
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>
          {carrito.length === 0 ? (
            <p className={styles.texto}>No hay productos en el carrito</p>
          ) : (
            carrito.map((producto) => (
              <div key={producto._id} className={styles.producto}>
                <div>
                  <Image
                    layout="responsive"
                    width={250}
                    height={500}
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>
                <div>
                  <p className={styles.nombre}>{producto.nombre}</p>
                  <div className={styles.cantidad}>
                    <p>Cantidad:</p>
                    <select
                      value={producto.cantidad}
                      className={styles.select}
                      onChange={(e) =>
                        actualizarCantidad({
                          cantidad: e.target.value,
                          id: producto._id,
                        })
                      }
                    >
                      <option value="">---Seleccionar Cantidad---</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                  <p className={styles.precio}>
                    $<span>{producto.precio}</span>
                  </p>
                  <p className={styles.subtotal}>
                    Subtotal: $
                    <span>{producto.precio * producto.cantidad}</span>
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.eliminar}
                  onClick={() => eliminarProducto(producto._id)}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>Total a Pagar: ${total}</p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
