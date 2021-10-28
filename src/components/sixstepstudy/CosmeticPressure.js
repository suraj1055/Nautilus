import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import CosmeticEdit from '../modals/CosmeticEdit';
import { Button } from 'reactstrap';

const CosmeticPressure = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal)
    }

    return (

        <div>
            <div className="grid-chart-container">
                <div className="form-group">
                    <CosmeticEdit toggle={toggle} modal={modal} />
                </div>
                <div>
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="MeltTemp" headerText="Melt Temp" textAlign="Center" width="100" />
                            <ColumnDirective field="LowPressure" headerText="Low Hydraulic Pressure" textAlign="Center" width="100" />
                            <ColumnDirective field="HighPressure" headerText="High Hydraulic Pressure" textAlign="Center" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4 chart_container_btn">
                        <Button color="primary"> {"Calculate & Show Graph"} </Button>
                    </div>
                </div>
                <div>
                    <ChartComponent>
                    </ChartComponent>
                </div>
            </div>
            <div className="row save_saveas_btn">
                <div className="col-md-12 text-right">
                    <Button color="third" className="btn-save-chart"> {"Save"} </Button>                    
                    <Button color="third"> {"Save As"} </Button>                
                </div>               
            </div>
        </div>
    )
}

export default CosmeticPressure;
