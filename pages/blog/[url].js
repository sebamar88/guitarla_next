import Image from "next/image";
import { formatearFecha } from "../../helpers";
import Layout from "../../components/Layout";
import styles from "../../styles/Post.module.css";

const PostPage = ({ entrada }) => {
  const { titulo, contenido, imagen, published_at } = entrada[0];

  return (
    <Layout page={titulo}>
      <div className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            src={imagen.url}
            alt={titulo}
            layout="responsive"
            width={1200}
            height={800}
            priority={true}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada,
    },
  };
}

/* export async function getServerSideProps({ query }) {
  const { id } = query;
  const url = `${process.env.API_URL}/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada,
    },
  };
} */

export default PostPage;
