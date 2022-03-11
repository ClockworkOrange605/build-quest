import './project-card.scss'
import image from './../../assets/drop.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function ProjectCard({projectInfo}){

  let linkTo='/collection/123'

  return(
      <Link to={linkTo}>
    <div className='card'>
      <div className='header-img'>
      <img src={projectInfo?.header || 'https://lh3.googleusercontent.com/YhFNM3GpVLCmhT_aVdzEcDfJSjaoqV8-gwrG56ukc9zJqIHqEuw05o_jwf-_cZ8yEAa645GJTtKN7XovzEUNisk_8wuK6X3ae23B3Q=h200'} className='image'></img>
      </div>
      <div className='profile-img'>
        <img src={ projectInfo?.logo || image} className='image'></img>
      </div>
      <div className='title'>{ projectInfo?.name || "Project Name"}</div>
      <div className='description'>{ projectInfo?.description || "Dynamic Pricing Dapp for NFT Drops and other cool stuff!"}</div>
    </div>
      </Link>
  )
}