import CardProject from "./card-project";
import "../styles/components/projects.sass";
import { Project } from "../types/request";
import { projetos } from "../API/api";

export default function Projects() {
  
  const AllProjects: Project[] = projetos
  console.log(AllProjects)
  
  return (
    <section >
      <h2>Projetos</h2>
      <div id="project-container">
        {AllProjects.map((project) => (
          <CardProject ProjectProps={project}  key={project.id}/>
        ))}
      </div>
    </section>
  );
}
