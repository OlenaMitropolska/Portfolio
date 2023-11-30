import React, { useState } from 'react'

function Home() {

  const [education, setEducation] = useState([
{
  "year": "09/2023 – 12/2023",
  "institution": "REDI School of Digital Integration",
  "certificate": "Abschluss: Front-End Development (AZAV certified)"
},
{
  "year": "03/2023 – 09/2023",
  "institution": "IB Sprachinstitut München",
  "certificate": "Abschluss Zertifikat: Berufsbezogener Deutschkurs B2 (BAMF)"
},
{
  "year": "05/2022 – 01/2022",
  "institution": "Lingbee Sprachinstitut",
  "certificate": "Abschluss Zertifikat: Integrationskurs A1-B1 (BAMF)"
},
{
  "year": "09/2019 – 06/2021",
  "institution": "Borys Grinchenko Kyiv University",
  "certificate": "Abschluss: Master’s degree (Linguist, Teacher of English language and Foreign Literature, Translator)"
},
{
  "year": "09/2015 – 06/2019",
  "institution": "Borys Grinchenko Kyiv University",
  "certificate": "Abschluss: Bachelor’s degree (Philology (French Language and Literature), Linguist, Teacher of French language and Foreign Literature, Teacher of English)"
},
{
  "year": "09/2004 – 05/2015",
  "institution": "Public school No. 106",
  "certificate": "Abschluss: Allgemeine Hochschulreife"
}
  ])




  return (
    <div className='homemain'>

      <div className="top">Olena Mitropolska <br /> Front-End Developer</div>
<br />


<h2>Skills</h2>
<div className='technologies'>
  <img src="https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-1.png" alt="html" />
  <img src="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" alt="css" />
<img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="javascript" />
<img src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" alt="react" />
</div>


<h2 className='educationh2'>Education</h2>

  {education.map(i => 
 <div className="education">
  <h2>{i.year}</h2>
<h4>{i.institution}</h4>

<p>{i.certificate}</p>
</div> )}


<div className='contactUs'>
  <h2>Contact Me</h2>
  <form className='form' action="">
    <input placeholder='your email address' type="email" />
    <input placeholder='your phone number' type="number" />
    <textarea placeholder=' your message' name="" id="" cols="30" rows="5"></textarea>
    <button type='submit'>Contact</button>
  </form>
</div>


    </div>
  )
}

export default Home