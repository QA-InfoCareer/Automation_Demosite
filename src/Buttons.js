import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';



const Buttons = () => {
    const [clickInfo, setClickInfo] = useState('');

    const handleClick = () => {
        setClickInfo('you have done a dynamic click');
    };

    const handleRightClick = (e) => {
        e.preventDefault(); // Prevent default context menu
        setClickInfo('you have done right click');
    };
    const handleDoubleClick = () => {
        setClickInfo('you have done a double  click');
    };

    return (
        <div>
            <div style={{ textAlign: "center", color: "blue" }}>
        <h1>Testing tools</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Buttons</h2>
      </div>
      <br></br>

        <div style={{textAlign:"left"}}> 
            <div>           
          <Button style={{textAlign:"left"}} variant="primary"
        onDoubleClick={handleDoubleClick}
    >
        Double Click Me
    </Button>
    </div>
    <br></br>
    <div>
    <Button style={{textAlign:"left"}} variant="primary"
        onContextMenu={handleRightClick}
                >
                    Right Click me
                </Button>
                </div>
                <br></br>

                <div>
            <div>
                <Button style={{textAlign:"left"}} variant="primary"
                    onClick={handleClick}
                >
                    Click Me
                </Button>
                </div>
            </div>
            <p>{clickInfo}</p>
        </div>
        </div>
    );
};



export default Buttons;