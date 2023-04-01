import React, { useEffect, useState } from 'react'
import Flimes from './componet/Flimes';
import './App.css'
export default function App() {
  const [usedata , setusedata]= useState([])
  
  
const url =`https://api.tvmaze.com/search/shows?q=all`;

  function pul(){
fetch(url)
.then( (response ) =>{
  return response.json();
}).then((data)=>{setusedata(data)
 
 } )

  }
  useEffect(()=>{

pul();
  }, [])


  return (<>
  <h3 className='heading'>Movies</h3>
    <div className='mv1' >
     
     {usedata.map(data=>(
       <div className='mvs2'  key={data.score}>
        
        <Flimes  name={data.show.name} links={data.show.officialSite} imgs={data.show.image?.medium} lang={data.show.language}   summary={data.show.summary} />
        
         
      </div>        
     ))}


    </div>

  
    
     </>
  )
}
