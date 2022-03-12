import './collections.scss'
import { ProjectCard } from '../../components/project-card/project-card'
import { useSelector, useDispatch } from "react-redux";


export function Collections(){

  const projectList = useSelector((state) => state.projectList);
  const info = useSelector((state) => state.projectsInfo)

  return(
    <div>
      <div className='card-container'>
        {projectList.map(( a ,index)=>{
          return (<ProjectCard key={index} projectInfo={info[index]} />)
        })}
      </div>
    </div>
  )
}
