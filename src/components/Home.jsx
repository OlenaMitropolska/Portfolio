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

      <div className="top">Olena Mitropolska</div>
<br />
<h1>Education</h1>
<br />
  {education.map(i => 
 <div className="education">
  <h2>{i.year}</h2>
<h4>{i.institution}</h4>

<p>{i.certificate}</p>
</div> )}

<br />
<h1>Technologies</h1>
<br />

<div className="experiences">
</div>



    </div>
  )
}

export default Home