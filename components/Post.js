import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../helpers";
import styles from "../styles/Post.module.css";

const Post = ({ entrada }) => {
  if (!entrada) return null;
  const { titulo, resumen, imagen, published_at, id, url } = entrada;

  return (
    <article>
      <Link href="/blog/[url]" as={`/blog/${url}`}>
        <a>
          <Image
            layout="responsive"
            src={imagen.url}
            width={800}
            height={600}
            alt={titulo}
            priority={true}
          />
        </a>
      </Link>
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
