import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout page="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Nosotros"
            width={600}
            height={450}
            fill="responsive"
          />
          <div className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            culpa quod dicta quam nesciunt corporis omnis rerum. Aliquam
            suscipit, eius deserunt sint assumenda eaque eveniet doloribus
            fugit, laudantium consequatur rerum ab beatae est quisquam
            reiciendis ducimus et atque dolorem? Vero, nemo accusamus. Adipisci
            porro ducimus id, consequuntur dignissimos soluta est debitis?
            Blanditiis necessitatibus aliquid nostrum error, reprehenderit quam
            iure fugiat temporibus excepturi laborum doloremque inventore amet
            ab laboriosam vel pariatur vero consectetur animi minima porro id,
            optio, quibusdam aut? Reprehenderit illum nostrum eos cumque
            repudiandae sequi hic voluptate dolorem eligendi. Neque natus qui
            dolorum magni in perferendis enim eveniet facilis ut dolore culpa
            quidem, ex ipsam quas, tenetur earum ducimus, reprehenderit odio
            voluptatum possimus autem non rerum? Similique quae ab reprehenderit
            eligendi iusto sint labore.
          </div>
        </div>
      </main>
    </Layout>
  );
}
