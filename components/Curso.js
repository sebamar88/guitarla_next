import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { title, content, image } = curso;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{title}</h2>
          <p className={styles.texto}>{content}</p>
          <a className={styles.enlace} href="#">
            Más Información
          </a>
        </div>
      </div>
      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.65),
                rgba(0, 0, 0, 0.7)
              ),
              url(${image.url});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
