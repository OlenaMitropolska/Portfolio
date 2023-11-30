import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useMediaQuery } from 'react-responsive'


function MyProjects(props) {
 
  // const isTablet = useMediaQuery({ query: '(min-width: 912px)' })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' })

  return (
    <div className='container'>

{props.data.map((i,j) =>
  <div  key={j} className="card">
      <a className='tag' target='blank' href={i.link}>
<img className='image' src={i.image} alt="" />
<h2 className='name'>{i.name}</h2>
</a>
</div>
  )}

    </div>
  )
}

export default MyProjects