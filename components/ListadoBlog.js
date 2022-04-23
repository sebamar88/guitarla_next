import Post from "./Post";
import styles from "../styles/Blog.module.css";

const ListadoBlog = ({ entradas }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entradas.map((entrada) => (
          <Post key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </>
  );
};

export default ListadoBlog;
