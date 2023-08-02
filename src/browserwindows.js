import React from 'react';
import { Button } from 'react-bootstrap';
function BW(){
    const handleOpenNewTab = () => {
        window.open('about:blank', '_blank');
      };
      const handleOpenNewWindow = () => {
        const newWindow = window.open('about:blank', '_blank', "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
        if (newWindow) {
          newWindow.focus();
        }
      };
      const handleOpenNewWindowmessage = () => {
        const newWindows = window.open('', '_blank', "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
        newWindows.document.write('<p>Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.</p>');
        newWindows.document.close();
      };
    return(
         <div>
            <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>
            <p style={{fontSize:'32px',textAlign:'center'}}>Browser Windows</p>
            <div><Button style={{backgroundColor:'dodgerblue',margin:'1%',borderRadius:'5px',height:'30px'}} onClick={handleOpenNewTab}>New Tab</Button></div>
            <div><Button style={{backgroundColor:'dodgerblue',margin:'1%',borderRadius:'5px',height:'30px'}} onClick={handleOpenNewWindow}>New Window</Button></div>
            <div><Button style={{backgroundColor:'dodgerblue',margin:'1%',borderRadius:'5px',height:'30px'}} onClick={handleOpenNewWindowmessage}>New Window Message</Button></div>
         </div>
    )
}
export default BW;