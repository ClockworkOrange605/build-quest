import { Link } from "react-router-dom"

import './project-card.scss'
import image from './../../assets/drop.png'

export function ProjectCard({ projectInfo }) {
  return (
    <Link to={projectInfo?.id ? `/collection/${projectInfo?.id}` : '#'}>
      <div className='card'>
        <div className='header-img'>
          {projectInfo?.header &&
            <img src={projectInfo?.header} className='image'></img>
          }
        </div>
        <div className='profile-img'>
          <img src={projectInfo?.logo || image} className='image'></img>
        </div>
        <div className='title'>{projectInfo?.name || "Collection Name"}</div>
        <div className='description'>{projectInfo?.description || "Collection Description"}</div>
      </div>
    </Link>
  )
}