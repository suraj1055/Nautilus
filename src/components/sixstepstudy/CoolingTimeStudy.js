import React, { useState, useEffect } from 'react';
import { ChartComponent, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import { Button } from 'reactstrap';
import CoolingAddColumn from '../columns&rows/CoolingAddColumn';
import CoolingAddRow from '../columns&rows/CoolingAddRow';
import { nanoid } from 'nanoid';
import { data, data2 } from '../data/Cooling_data'
import CoolingGrid from '../Grids/CoolingGrid';
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css';
import CoolingEdit from '../modals/CoolingEdit'

export let chartInstance;

const CoolingTimeStudy = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'Undo', 'Redo']
    };

    const [modal, setModal] = useState();

    const toggle = () => {

        setModal(!modal);

    }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {
        setModal2(!modal2);
    }

    const [modal3, setModal3] = useState();

    const toggle3 = () => {
        setModal3(!modal3);
    }

    // ************ Functions to deal with column ************

    const [header, setHeader] = useState();
    const [column, setColumn] = useState(data);
    const [isColumnId, setIsColumnId] = useState(null);
    const [toggleEdit, setToggleEdit] = useState(true);
    const [grid2, setGrid2] = useState("");
    // const [chartData, setChartData] = useState()
    const [editFormData, setEditFormData] = useState()
    const [isRowId, setIsRowId] = useState(null)


    const addHeader = (e) => {
        e.preventDefault();
        setHeader(e.target.value)
    }

    const addColumn = () => {
        if (!header) {

        }
        else {
            const newColumn = { id: nanoid(), header: header }
            setColumn([...column, newColumn]);
            console.log(newColumn)
            setHeader("");
        }
    };

    const editColumnHeader = () => {
        if (header && !toggleEdit) {
            setColumn(
                column.map((element) => {
                    if (element.id === isColumnId) {
                        return { ...element, header: header }
                    }
                    return element;
                })
            )
            setHeader("");
            setIsColumnId(null)
        }
        else {

        }
    }

    const handleEditFormChange = (event) => {

        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }

    const handleEditFormSubmit = (event) => {

        event.preventDefault()

        const editedValue = { id: isRowId }

        const newObject = Object.assign(editedValue, editFormData);

        const newValues = [...NewRow2];

        const index = NewRow2.findIndex((value) => value.id === isRowId);

        newValues[index] = newObject;

        setNewRow2(newValues);

        setIsRowId(null);

    }

    const setId = (event, value) => {

        event.preventDefault();

        setIsRowId(value.id);

        const formValues = Object.assign({}, value)

        setEditFormData(formValues);

    }

    const setGraph = () => {
        console.log(NewRow2)
    }

    const deleteColumn = (id) => {
        const updatedColumns = column.filter((index) => {
            return index.id !== id;
        })
        setColumn(updatedColumns)
    }

    const editColumn = (id) => {
        setIsColumnId(id)
        setToggleEdit(false)
    }

    const editCancel = () => {
        setIsColumnId(null)
        setToggleEdit(true)
    }

    // ************ Functions to deal with row ***************

    const row1 = [];
    const [row, setRow] = useState();
    const [NewRow2, setNewRow2] = useState(data2);

    const addRow = (e) => {
        e.preventDefault();
        setRow(e.target.value)
    }

    const increaseRow = () => {
        for (let i = 0; i < parseInt(row); i++) {
            row1.push({
                id: nanoid(),
                "edit": true,
                "delete": true
            })
        }
        setNewRow2([...NewRow2, ...row1]);
    };

    const deleteRow2 = (id) => {
        const updatedRows = [...NewRow2].filter((value) => {
            return value.id !== id;
        });
        setNewRow2(updatedRows);
    };

    useEffect(() => {

        const handleChange = (e) => {
            chartInstance.series[0].dataSource = NewRow2;
            chartInstance.refresh();
        }

        handleChange()

    }, [NewRow2])

    return (
        <>
            <div className='cooling pb-2'>
                <div className='card p-4'>
                    <div className="grid-chart-container">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex">
                                <div>
                                    <CoolingAddColumn modal={modal} toggle={toggle} addColumn={addColumn} addHeader={addHeader} />
                                </div>

                                <div>
                                    <CoolingAddRow modal2={modal2} toggle2={toggle2} addRow={addRow} increaseRow={increaseRow} />
                                </div>

                                <div>
                                    <CoolingEdit modal3={modal3} toggle3={toggle3} column={column} addHeader={addHeader} editColumnHeader={editColumnHeader} editCancel={editCancel} editColumn={editColumn} />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-pill btn-fifth btn-air-fifth mr-4" type="button"> Print </button>

                                <button className="btn btn-pill btn-primary btn-air-primary mr-4" type="button" onClick={handleShow}> Comment </button>
                                <Modal isOpen={show} centered={true} >
                                    <ModalHeader toggle={handleClose}>
                                        Add Comment
                                    </ModalHeader>
                                    <ModalBody>
                                        <RichTextEditorComponent toolbarSettings={toolbarSettings} height={250}>

                                            <Inject services={[Toolbar, HtmlEditor]} />
                                        </RichTextEditorComponent>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary"> Save </Button>
                                        <Button color="dark" onClick={handleClose}> Cancel </Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>
                        <div>
                            <CoolingGrid modal={modal} toggle={toggle} modal2={modal2} toggle2={toggle2} column={column} deleteColumn={deleteColumn} editColumn={editColumn} isColumnId={isColumnId} editCancel={editCancel} addHeader={addHeader} setHeader={setHeader} toggleEdit={toggleEdit} editColumnHeader={editColumnHeader} addColumn={addColumn} NewRow2={NewRow2} deleteRow2={deleteRow2} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} setId={setId} isRowId={isRowId} editFormData={editFormData} />
                        </div>
                    </div>
                </div>
                <div className='card p-2'>
                    <div className="grid-chart-container">
                        <div className="row">
                            <div className="col-md-3 ml-4">
                                <div className="form-group">
                                    <label className="lbl_design"> X-Axis: </label>
                                    <select className="form-control digits" onClick={(e) => setGrid2(e.target.value)}>
                                        {column.map((value, key) => (
                                            <>
                                                {value.id === 0 ? '-' : <option> {value.header} </option>}
                                            </>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <button className="btn btn-pill btn-primary btn-air-primary mr-4" type="button" onClick={setGraph}> Show Graph </button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <ChartComponent id='charts' ref={chart => chartInstance = chart} title="Cold Runner" primaryXAxis={{ valueType: "Category", title: "Cooling Time Study" }} primaryYAxis={{ title: `${grid2}` }}>
                                <Inject services={[LineSeries, Category, DataLabel]} />
                                <SeriesCollectionDirective>

                                    {/* NewRow2 is the name of the Array which contains our data and again grid2 will be varying */}
                                    <SeriesDirective type="Line" dataSource={NewRow2} xName="Cooling Time Study" yName={grid2} marker={{ dataLabel: { visible: true }, visible: true }}></SeriesDirective>

                                </SeriesCollectionDirective>

                            </ChartComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CoolingTimeStudy;
