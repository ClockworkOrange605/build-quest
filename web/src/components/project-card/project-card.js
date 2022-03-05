import './project-card.scss'
import image from './../../assets/drop.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function ProjectCard({projectInfo}){

  return(
      <Link to='/collection?id='>
    <div className='card'>
      <div className='header-img'>
      <img src='https://lh3.googleusercontent.com/YhFNM3GpVLCmhT_aVdzEcDfJSjaoqV8-gwrG56ukc9zJqIHqEuw05o_jwf-_cZ8yEAa645GJTtKN7XovzEUNisk_8wuK6X3ae23B3Q=h200' className='image'></img>
      </div>
      <div className='profile-img'>
        <img src={image} className='image'></img>
      </div>
      <div className='title'>Project Name</div>
      <div className='creator'>
        <a href='https://stackoverflow.com/questions/50350085/how-to-make-a-hyperlink-external-in-react'><span className='by'>by</span> Dynamic Drops</a>
      </div>
      <div className='description'>Dynamic Pricing Dapp for NFT Drops and other cool stuff!</div>
    </div>
      </Link>
  )
}