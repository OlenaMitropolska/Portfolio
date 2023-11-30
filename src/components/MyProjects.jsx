import React from 'react'
import { useNavigate } from 'react-router-dom'
// import RecipeImage from "../RecipeProject.png"


function MyProjects(props) {

  // const navigate = useNavigate()

  // function projectLink() {

  //   navigate(props.data.link) //ask about Use Effect
  // }
  return (
    <div className='container'>
      {/* <img src={RecipeImage} alt="" /> */}

{props.data.map((i,j) =>
  <div key={j} className="card">
<img className='image' src={i.image} alt="" />
<h2 className='name'>{i.name}</h2>
{/* <p>{i.link}</p> */}
  </div>
  )}

    </div>
  )
}

export default MyProjects