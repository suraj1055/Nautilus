import React from 'react'

const ColdEditRow = ({ key1, value, column, handleEditFormChange, deleteRow2, handleEditFormSubmit, NewRow2 }) => {
    return (
        <tr key={key1} onMouseOut={handleEditFormSubmit}>

            {column.map((index, key2) => (

                (<td> <input type='text' name={index.header} style={{backgroundColor:'#fff'}} className="form-control" defaultValue={NewRow2[key1][index.header] || ''} onChange={handleEditFormChange} /> </td>)

            ))}

            <td className="icon-position"> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

        </tr>
    )
}

export default ColdEditRow
