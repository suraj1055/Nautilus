import React from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table'

const CavityGrid2 = ({ column }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <div className="Cavity-Grid-1-Container">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th> <h6> Cavity No. </h6> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <input type='text' className="form-control" value="Total Fill" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="Average Fill" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="Range" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="Max Part Wt." /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="Max Part Wt." /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="% Variation From Average" /> </td>
                            </tr>

                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-4" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-5" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-4" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-5" /> </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {column.map((index) => {
                    return (
                        <div className="Cavity-Grid-2-Container" key={index.id}>
                            <Table striped bordered hover responsive variant="light">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="table-heading-content">
                                                <div className="table-heading">
                                                    <h6> {index.header} </h6>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" readOnly/> </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default CavityGrid2
