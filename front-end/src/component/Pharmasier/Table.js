import React from 'react'


export default function Table() {



return (
<div>

    <div className="card">
        <div className="card-header">
            <h2>PharmGarde</h2>
        
            {/* <button>See all <span className="fas fa-arrow-right" /> </button> */}
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
                       

                       

                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
)
}