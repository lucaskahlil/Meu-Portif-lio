import React from 'react'
import { DiHtml5, DiCss3, DiNodejsSmall, DiSass, DiReact, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiStyledcomponents, SiNestjs } from 'react-icons/si'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import '../styles/components/tecnology.sass'

export default function Tecnology() {

  const techs = [
    {id: "js", name: "JavaScript", icon: <BiLogoJavascript />},
    {id: "ts", name: "TypeScript", icon: <BiLogoTypescript />},
    {id: "react", name: "REACT", icon: <DiReact />},
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "node", name: "NodeJS", icon: <DiNodejsSmall />},
    {id: "sass", name: "SASS", icon: <DiSass />},
    {id: "git", name: "Git", icon: <DiGit />},
    {id: "github", name: "GitHub", icon: <DiGithubBadge />},
    {id: "styled", name: "Styled-Components", icon: <SiStyledcomponents />},
    {id: "nest", name: "NestJS", icon: <SiNestjs />}
  ]

  return (
    <section className='tech-container'>
      <h2>Tecnologias</h2>
        <div className='tech-grid'>
          {techs.map((tech) => (
            <div className='tech-card' id={tech.id} key={tech.id}>
              {tech.icon}
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
    </section>
  )
}
