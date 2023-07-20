import React from 'react'
import '../styles/components/card-project.sass'
import { Project } from '../types/request'

interface CardProjectProps {
  ProjectProps: Project
}

export default function CardProject({ProjectProps}: CardProjectProps) {
  return (
    <div id='card'>
      <img src={ProjectProps.imgCard} alt="" />
      <h3>{ProjectProps.title}</h3>
    </div>
  )
}
