import { GET_PROJECTS_LIST } from "../Actions";

const initialState = {
  projectList: [1,2,3,4,5,6,7,8,9],
  projectsInfo: [
    {id: 0, name:'Cuddly Koalas', description: 'The cutest and cuddliest koalas on the blockchain', logo: 'https://drive.google.com/uc?id=1QwQGby9R0llYJd5n9TLPkDlA2GZbgfjY', header: 'https://drive.google.com/uc?id=1Qz7CRnBpJDXBesnBpi9fRTBXAjilXtRV'},
    {id: 1, name:'Fantastic Flowers', description: 'Brighted up your life with a Fantastic Flower :)', logo: 'https://drive.google.com/uc?id=1R5Qw8nhmzd-I9Q5N9YUltiAFL5zEbOwT', header: 'https://drive.google.com/uc?id=1R5XHseGV8m1tOhXJ9O-TGaEzbVx07HKv'},
    {id: 2, name:'Friendly Fish', description: 'Dive into the underwater world of Friendly Fish. Join the school today!', logo: 'https://drive.google.com/uc?id=1RFxrsDFhCthBs9UZ2Gr3H1NOg_hmHsPu', header: 'https://drive.google.com/uc?id=1RLLFvDFVRqrX8EiMu1opNlqTFiJgO076'},
    {id: 3, name:'Happy Hamsters', description: 'These are the Happiest Hamsters — they’re almost in heaven. Hop on the hamster wheel with us today!', logo: 'https://drive.google.com/uc?id=1ROg6mtciFHH3COWNboBRJqn1Akuvg_9Y', header: 'https://drive.google.com/uc?id=1ROtXv0jeEUOnq70uXlhaLcGV1gO5BOEC'},
    {id: 4, name:'Hats of the World', description: 'A hat for every season, a hat for every nation. Join our global tribe of hat lovers, by minting a Hat of the World today!', logo: 'https://drive.google.com/uc?id=1R4_xVHLZrrPHnHQvtQ7Uw13y88vsGmbS', header: 'https://drive.google.com/uc?id=1R4_IsUYIaKvn6Z7M_Xk-_kkZPHdiCkck'},
    {id: 5, name:'Jazzy Jaguars', description: 'Do you like Jaguars? Do you like Jazz? You’ll love the Jazzy Jaguars!', logo: 'https://drive.google.com/uc?id=1R-MbI7_pJ9kSoRcLoQuxQK71nlBEM_OE', header: 'https://drive.google.com/uc?id=1R4786TEVZajoXNbB10UzvvmQcJpepuSY'},
    {id: 6, name:'Marvellous Mushrooms', description: 'No, no magic—we are the Marvelous Mushrooms! Puff yourself up and join the movement today. Mint a Mushroom and feel Marvelous.', logo: 'https://drive.google.com/uc?id=1RDx3Iubt-4QvAy-vkphSqUbWnIPJMIv1', header: 'https://drive.google.com/uc?id=1RFaAtI5Gy6jrCTUOQZ9yp_8G6hPEGAG8'},
    {id: 7, name:'Perky Parrots', description: 'We are the Perkiest Parrots you ever saw! All day long we chirp away, drinking coffee and feeling perky :)', logo: 'https://drive.google.com/uc?id=1RPy1kT9LWMdoOps9phGyRUFmIRfXY6Ti', header: 'https://drive.google.com/uc?id=1RR6jJf--QnCaXKLVmFEzfqBl36x67c4u'},
    {id: 8, name:'Terrific Turtles', description: 'Terrific Turtles are the latest collection dropping on Dynamic Drops! They may be slow, but they are terrific!', logo: 'https://drive.google.com/uc?id=1RU0VrQLwW0mYf69cHFhx5-Nb3G70k7jN', header: 'https://drive.google.com/uc?id=1VkPdE1EwDOd0j-j_NUptqxPtR1LRmU0g'}
  ]
}

function rootReducer(state=initialState, action){
  if(action.type === GET_PROJECTS_LIST){
    return {
      ...state,
      projectList: action.payload,
    }
  }
  return state
}

export default rootReducer;