import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import '../App.css';

const CosmeticEdit = ({ modal, toggle, setHeader1, setHeader2, Melting, Hydraulic }) => {

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

    return (

        <div className="btn-showcase">
            {/* < !-- Using Form Modal --> */}
            <div className="mb-4 d-flex justify-content-between">
                <div>
                    <Button color="primary" onClick={toggle}> Edit Column Header </Button>
                </div>
                <div>
                    <Button color="fifth" className="btn btn-sm mr-4" type="button"> Print </Button>
                    <Button onClick={handleShow} color="primary" className="btn btn-sm step-button2" type="button"> Comment </Button>
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
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>{"Change Header Text"}</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"X-Axis"}:</label>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control" defaultValue={Melting} type="text" onChange={setHeader1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"Y-Axis"}:</label>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control" defaultValue={Hydraulic} type="text" onChange={setHeader2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">{"Set"}</Button>
                    <Button color="fourth" onClick={toggle}>{"Cancel"}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CosmeticEdit;
