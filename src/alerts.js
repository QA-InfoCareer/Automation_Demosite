import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
function Alert() {
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const show = () => {
    const timer = setTimeout(() => {
      alert('This alert appeared after 5 seconds');
    }, 5000);
    return timer;

  }
  const handleConfirm = () => {

    const result = window.confirm('Do you confirm action?');

    if (result) {
      // User clicked "OK" in the confirmation box
      // Perform the desired action here
      setMessage('You Selected Ok');

    } else {
      // User clicked "Cancel" in the confirmation box
      setMessage('You Selected Cancel');
    }


  };
  const handlePrompt = () => {
    const userInput = window.prompt('Please enter your name');
    if (userInput !== null) {
      // User entered a value in the prompt box
      // Perform the desired action here
      console.log('User entered:', userInput);
      setMessage1(userInput);
    } else {
      // User clicked "Cancel" in the prompt box or left it empty
      console.log('User cancelled or did not enter any value.');
      setMessage1('');
    }
  };
  return (
    <div>
      <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>
      <p style={{ fontSize: '32px', textAlign: 'center' }}>Alerts</p>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }} >
        <span style={{marginLeft:'1%'}}>Click Button to see alert</span>
         <Button style={{ backgroundColor: 'dodgerblue', borderRadius: '5px', height: '30px', color: 'white',marginLeft:'68%' }} onClick={() => alert('You clicked a button')}>Click me</Button> 
      </div>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
        <span style={{marginLeft:'1%'}}>On button click, alert will appear after 5 seconds</span>
        <Button style={{ backgroundColor: 'dodgerblue', borderRadius: '5px', height: '30px', color: 'white',marginLeft:'52.8%' }} onClick={show}>Click me</Button>
      </div>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
        <span className="col-lg-3" style={{marginLeft:'1%'}}>
          On button click, confirm box will appear

        </span>
        <div className="col-lg-3">
        {message && <p style={{ marginLeft: '0.5%' }} className='text-success'>{message}</p>}
        </div>
        <div className="col-lg-3">
        </div>  
        <div className="col-lg-3">
         <Button style={{ backgroundColor: 'dodgerblue', borderRadius: '5px', height: '30px', color: 'white' }} onClick={handleConfirm}>Click me</Button> 
         </div>
      </div>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
        <span className="col-lg-3" style={{marginLeft:'1%'}}>On button click, prompt box will appear</span>
        <div className="col-lg-3">
        {message1 && <p style={{ marginLeft: '0.5%' }} className='text-success'>You entered {message1}</p>}
        </div>
        <div className="col-lg-3">
        </div> 
        <div className="col-lg-3">
        <Button style={{ backgroundColor: 'dodgerblue', borderRadius: '5px', height: '30px', color: 'white' }} onClick={handlePrompt}>Click me</Button> 
        </div>
      </div>
    </div>
  )
}
export default Alert;   