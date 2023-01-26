import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'

export default function Commante() {
    const [commante,setCommante]= useState([])
    const [update , SetUpdate] = useState('')

    const getAllCommant = async () => {

        const res = await axios.get('http://localhost:9000/api/getCommentaire')
        setCommante(res.data)
         
        }
       
        // useEffect(() => {
        //   getAllCommant()
         
        //   }, [])   
         


  return (
    <div>
 <div className="row d-flex justify-content-center">
  <div className="col-md-8 col-lg-6">

  

    <div className="card shadow-0 border" style={{backgroundColor: '#f0f2f5'}}>
      <div className="card-body p-4">
        
      { commante.map((item ) => {
        return(
        <div className="card mb-4">
          <div className="card-body">
            <p> {item.commantair} </p>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width={25} height={25} />
                <p className="small mb-0 ms-2">{item.name}</p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <p className="small text-muted mb-0">Upvote?</p>
                <i className="far fa-thumbs-up mx-2 fa-xs text-black" style={{marginTop: '-0.16rem'}} />
                <p className="small text-muted mb-0">3</p>
              </div>
            </div>
          </div>
        </div>
        )})
      }
     
      </div>
    </div>
  
  </div>
</div>

  
    </div>
  )
}
