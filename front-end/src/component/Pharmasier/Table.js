import React from 'react'
import { useState,useEffect } from 'react';
import Ajouter from'./AjoutPharmacier '
import axios from 'axios'


export default function Table() {

    const [commante,setDb]= useState([])
    const [loading, setLoading] = useState(false)
    const [update , SetUpdate] = useState('')

const getAppartement = async () => {

    const res = await axios.get('http://localhost:9000/api/getAllPharmacier')
    setDb(res.data)
    SetUpdate('get data')
    setLoading(true)
    }
  
    getAppartement()
   
   


return (
<div>

    <div className="card">
        <div className="card-header">
            <h2>PharmGarde</h2>
        
            <Ajouter />
        
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td> address</td>
                            <td>latitude</td>
                            <td>longitude</td>
                            <td>opening_hours</td>
                            <td>services</td>
                            <td>delete</td>
                            <td>update</td>
                        </tr>
                    </thead>
                    <tbody>

                        { commante.map((item ) => {
                        return(

                        <tr key={item._id}>
                        
                           
                            <td>{item.name }</td>
                            <td>{item.address }</td>
                            <td>{item.latitude}</td>
                            <td>{item.longitude}</td>
                            <td>{item.opening_hours}</td>
                            <td>{item.services}</td>
                            <td className='up'>
                                <button  type="button" className="btn
                                    btn-danger">delete</button>
                            </td>
                            <td className=''>
                            <button  type="button" className="btn
                                btn-success">update</button>
                        </td>
                          
                        </tr>
                        )
                        })}

                    </tbody>

                </table>
            </div>
        </div>
    </div>

</div>
)
}