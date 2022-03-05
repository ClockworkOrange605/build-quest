import './collections.scss'
import { ProjectCard } from '../../components/project-card/project-card'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';


export function Collections(){


  const projectList = useSelector((state) => state.projectList);

  useEffect(()=>{
    console.log(projectList)
  })


  return(
    <div>
      <div className='card-container'>
        {projectList.map(( a ,index)=>{
          return (<ProjectCard key={index} projectInfo={projectList[index]} />)
        })}
      </div>
    </div>
  )
}