import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {
  return (
    <Layout page="Inicio" guitarra={guitarras[3]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className="contenedor">
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=createdAt:DESC&_limit=6`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_sort=createdAt:DESC&_limit=3`;

  const [guitarras, curso, entradas] = await Promise.all([
    fetch(urlGuitarras).then((r) => r.json()),
    fetch(urlCursos).then((r) => r.json()),
    fetch(urlBlog).then((r) => r.json()),
  ]);
  return {
    props: { guitarras, curso, entradas },
  };
}
