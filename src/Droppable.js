import React,{useState} from 'react';
import './styles1.css'; // Import your CSS file for styling
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draggable from 'react-draggable';

const Drop = () => {
    const [color, setColor] = useState('white');
    const [dropped, setDropped] = useState(false);

    const handleDragStart = (event) => {
        // Set the data to be transferred during the drag operation
        event.dataTransfer.setData('text/plain', 'Dragged Element');
      };
    const handleDrop = (event) => {
        event.preventDefault();
        setColor('violet');
        setDropped(true);
      };
    
      const handleDragOver = (event) => {
        event.preventDefault();
      };
    const boxStyles = {
        width: '100px',
        height: '50px',
        padding: '5px',
        margin: '1rem',
        verticalAlign: 'middle',
        border: '1px dashed black',
        cursor: 'move',
        textAlign: 'center',
        backgroundColor: color
    };
    const boxStyles1 = {
        width: '150px',
        height: '150px',
        padding: '5px',
        margin: '1rem',
        marginright: '100px',
        verticalAlign: 'middle',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: color
    };
    const boxStyles3 = {
        width: '250px',
        height: '250px',
        padding: '5px',
        margin: '1rem',
        verticalAlign: 'middle',
        border: '1px solid black',
        textAlign: 'center'
    };
    const box = {
        width: '200px',
        height: '150px',
        padding: '5px',
        margin: '1rem',
        verticalAlign: 'middle',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div>
            <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>
            <p style={{ fontSize: '32px' }}>Droppable</p>
            <Tabs defaultActiveKey="tab1" id="my-tabs">
                <Tab eventKey="tab1" title="Simple" style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex' }}>
                        <Draggable>
                            <div className="drag-box" id="dragBox" style={boxStyles} draggable
      onDragStart={handleDragStart}>
                                Drag me
                            </div>
                        </Draggable>


                        <div onDrop={handleDrop}
      onDragOver={handleDragOver} style={boxStyles1}><p>{dropped ? 'Dropped' : 'Drop here'}</p></div>
                    </div>
                </Tab>
                <Tab eventKey="tab2" title="Accept" style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex' }}>
                        <div >
                            <Draggable>
                                <div className="drag-box" id="dragBox" style={boxStyles}>
                                    Acceptable
                                </div>
                            </Draggable>
                            <Draggable>
                                <div className="drag-box" id="dragBox" style={boxStyles}>
                                    Not Acceptable
                                </div>
                            </Draggable>
                        </div>

                        <div id="droppable" class="drop-box ui-droppable" style={boxStyles1}><p>Drop here</p></div></div>

                </Tab>
                <Tab eventKey="tab3" title="Prevent Propogation" style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex' }}>
                        <Draggable>
                            <div className="drag-box" id="dragBox" style={boxStyles}>
                                Drag me
                            </div>
                        </Draggable>
                        <div id="droppable" class="drop-box ui-droppable" style={boxStyles3}><p>Outer droppable</p>
                            <p style={box}>Inner droppable(not greedy)</p></div>
                    </div>
                    <div style={{ marginLeft: '18%' }}>
                        <div id="droppable" class="drop-box ui-droppable" style={boxStyles3}><p>Outer droppable</p>
                            <p style={box}>Inner droppable( greedy)</p></div>
                    </div>
                </Tab>
                <Tab eventKey="tab" title=" Revert Draggable" style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Draggable>
                                <div className="drag-box" id="dragBox" style={boxStyles}>
                                    Will Revert
                                </div>
                            </Draggable>
                            <Draggable>
                                <div className="drag-box" id="dragBox" style={boxStyles}>
                                    Not Revert
                                </div>
                            </Draggable>
                        </div>

                        <div id="droppable" class="drop-box ui-droppable" style={boxStyles1}><p>{dropped ? 'Dropped' : 'Drop here'}</p></div>
                    </div>


                </Tab>

            </Tabs>
        </div>

    );
};
export default Drop;
