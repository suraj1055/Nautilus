import React, { useState } from 'react';
import "../../assets/custom-stylesheet/app2_style.css";
import "../../assets/custom-stylesheet/samplepage_style.css";
// import { useHistory } from 'react-router-dom';
import '../App.css';
import Mold from './Mold';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';

const MoldGrid = ({ MoldData, setMoldData, setShowGrid, modal3, toggle3, handleAddFormChange, handleAddFormSubmit, setMold_Id, handleEditPartSubmit, handleEditPartChange, NewRow2, setPartId, isPartId, setPartNumber, PartNumber, setPart, partColumn }) => {

    // This an local object which stores the edit mold data.
    const [editMoldData, setEditMoldData] = useState({
        Mold_Id: "",
        Platen_Orientation: "",
        Number_Of_Bases: "",
        Is_This_A_New_Mold: "",
        Number_Of_Parts: ""
    })

    // Set's the Id of the Mold in which the data has been edited.
    const [isRowId, setIsRowId] = useState(null)

    // Set's the Mold Id for which we should get the session's.
    const handleSession = (moldId) => {
        setMold_Id(moldId)
        setShowGrid(true)
    }

    // This is the event which first store's the edited data in the local object.
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editMoldData };
        newFormData[fieldName] = fieldValue;

        setEditMoldData(newFormData);

    }

    // This the event which then updates the previos object with the edited object.
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedValue = {
            id: isRowId,
            Mold_Id: editMoldData.Mold_Id,
            Platen_Orientation: editMoldData.Platen_Orientation,
            Number_Of_Bases: editMoldData.Number_Of_Bases,
            Is_This_A_New_Mold: editMoldData.Is_This_A_New_Mold,
            Number_Of_Parts: editMoldData.Number_Of_Parts
        }

        const newValues = [...MoldData];

        const index = MoldData.findIndex((value) => value.id === isRowId)

        newValues[index] = editedValue;

        setMoldData(newValues);

        setIsRowId(null);

    }

    const deleteRow2 = (id) => {
        const updatedRows = [...MoldData].filter((value) => {
            return value.id !== id;
        });
        setMoldData(updatedRows);
    };

    const setId = (event, mold) => {

        event.preventDefault();

        setIsRowId(mold.id);

        const formValues = {
            Mold_Id: mold.Mold_Id,
            Platen_Orientation: mold.Platen_Orientation,
            Number_Of_Bases: mold.Number_Of_Bases,
            Is_This_A_New_Mold: mold.Is_This_A_New_Mold,
            Number_Of_Parts: mold.Number_Of_Parts
        }

        setEditMoldData(formValues);
    }

    // useEffect(() => {
    //     if (user) {
    //         console.log(user.id)
    //     }
    //     else {
    //         console.log("N/A")
    //     }
    // }, [user])

    return (
        <>
            <div className="container-fluid">
                <div className="row m-4">
                    <div>
                        <Mold modal3={modal3} toggle3={toggle3} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} handleEditFormSubmit={handleEditFormSubmit} handleEditPartSubmit={handleEditPartSubmit} handleEditPartChange={handleEditPartChange} NewRow2={NewRow2} setPartId={setPartId} isPartId={isPartId} setPartNumber={setPartNumber} PartNumber={PartNumber} setPart={setPart} partColumn={partColumn} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <form autoComplete="off">
                    {/* <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th>
                                   <span className='Pressure_Heading'>Mold ID</span> 
                                </th>
                                <th>
                                    <span className="Pressure_Heading"> Platen Orientation  </span>
                                </th>
                                <th>
                                    <span className="Pressure_Heading"> Number of Bases </span>
                                </th>
                                <th>
                                    <span className="Pressure_Heading"> Is a Family Mold </span>
                                </th>
                                <th>
                                    <span className="Pressure_Heading"> Number of Parts </span>
                                </th>
                                <th>
                                    <span> Go to Sessions </span>
                                </th>
                                <th>
                                    <span> Action </span>
                                </th>
                            </tr>
                        </thead>
                    </Table> */}
                    <div className="viscosity_table" onMouseOut={handleEditFormSubmit}>
                        <Table striped bordered hover responsive variant="light">
                            <thead>
                                <tr>
                                    <th className='Pressure_Heading'>
                                        <span>Mold ID</span>
                                    </th>
                                    <th className='Pressure_Heading'>
                                        <span> Platen Orientation  </span>
                                    </th>
                                    <th className='Pressure_Heading'>
                                        <span> Number of Bases </span>
                                    </th>
                                    <th className='Pressure_Heading'>
                                        <span> Is a Family Mold </span>
                                    </th>
                                    <th className='Pressure_Heading'>
                                        <span> Number of Parts </span>
                                    </th>
                                    <th className='Pressure_Heading'>
                                        <span> Go to Sessions </span>
                                    </th>
                                    <th className='Pressure_Heading'>
                                        <span> Action </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="grid_style">
                                {MoldData.map((mold, moldId) => (
                                    <tr key={MoldData[moldId].id} onClick={(event) => setId(event, mold)}>
                                        <>
                                            {isRowId === mold.id ?
                                                (
                                                    <>
                                                        <td> <input type='text' className="form-control" name="Mold_Id" onChange={handleEditFormChange} value={editMoldData.Mold_Id} /> </td>

                                                        <td> <input type='text' className="form-control" name="Platen_Orientation" onChange={handleEditFormChange} value={editMoldData.Platen_Orientation} /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Bases" onChange={handleEditFormChange} value={editMoldData.Number_Of_Bases} /> </td>

                                                        <td> <input type='text' className="form-control" name="Is_This_A_New_Mold" onChange={handleEditFormChange} value={editMoldData.Is_This_A_New_Mold} /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Parts" onChange={handleEditFormChange} value={editMoldData.Number_Of_Parts} /> </td>

                                                        <td> <i className="fas fa-link viscocity_icons" onClick={() => handleSession(mold.Mold_Id)}></i> </td>

                                                        <td>
                                                            <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(mold.id)}></i>
                                                        </td>
                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                        <td> <input type='text' className="form-control text-box-disabled" name="Mold_Id" value={mold.Mold_Id} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Platen_Orientation" value={mold.Platen_Orientation} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Bases" value={mold.Number_Of_Bases} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Is_This_A_New_Mold" value={mold.Is_This_A_New_Mold} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Parts" value={mold.Number_Of_Parts} readOnly /> </td>

                                                        <td className='icon-position'> <i className="fas fa-link viscocity_icons" onClick={() => handleSession(mold.Mold_Id)}></i> </td>

                                                        <td className='icon-position'>
                                                            <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(mold.id)}></i>
                                                        </td>
                                                    </>
                                                )
                                            }
                                        </>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MoldGrid