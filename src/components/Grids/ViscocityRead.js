import React from 'react'

const Read = ({ setId, NewRow2, deleteRow2, NewRow, rowId, IntensificationRatio }) => {
    return (
        <tr key={rowId} onClick={(event) => setId(event, NewRow)}>

            <td> <input type='text' className="form-control" value={NewRow.Injection_Speed} readOnly/> </td>

            <td> <input type='text' className="form-control" value={NewRow.Fill_Time} readOnly/> </td>

            <td> <input type='text' className="form-control" value={NewRow.Peak_Inj_Press} readOnly/> </td>

            <td> <input type='text' className="form-control" name="Viscosity" value={NewRow2[rowId].Viscosity === "" ? ('-') : (Math.round(NewRow2[rowId].Fill_Time * NewRow2[rowId].Peak_Inj_Press * IntensificationRatio ))} readOnly /> </td>

            <td> <input type='text' className="form-control" name="Shear_Rate" value={NewRow2[rowId].Shear_Rate === "" ? '-' : Number(NewRow.Shear_Rate).toFixed(3)} readOnly /> </td>

            <td> <input type='text' className="form-control" name="Absolute_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : (Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity)))} readOnly /> </td>

            <td> <input type='text' className="form-control" name="Drop_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : Number((Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity) * 100) / (NewRow2[rowId - 1].Viscosity)).toFixed(1))} readOnly /> </td>

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
        </tr>
    )
}

export default Read