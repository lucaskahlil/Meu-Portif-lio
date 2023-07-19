import CardProject from "./card-project";
import "../styles/components/projects.sass";

export default function Projects() {
  return (
    <section >
      <h2>Projetos</h2>
      <div id="project-container">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </section>
  );
}
