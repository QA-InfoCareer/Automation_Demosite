import React from 'react';

const Upload = () => {
    const handleFileUpload = (event) => {
        // Handle file upload logic here
        const file = event.target.files[0];
        console.log('File uploaded:', file);
    };

    const handleFileDownload = () => {
        // Handle file download logic here
        // For example, you can create a Blob and use it to create a URL for download
        const fileData = 'This is the content of the downloaded file.';
        const blob = new Blob([fileData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.txt';
        a.click();
        URL.revokeObjectURL(url);
    };



    return (
        <div>
            <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>

            <div style={{ textAlign: "center", color: "black" }}>
                <h3>RadioButton</h3>
            </div>
            <br></br>
            <div style={{textAlign:"left"}}>
            <button onClick={handleFileDownload} style={{backgroundColor:"dodgerblue",color:"white"}}>Download</button>
            </div>
            <br></br>
            <div style={{textAlign:"left"}}>Select File
            <br></br>
            <input type="file" onChange={handleFileUpload} style={{width:"20%"}}/>
            </div>
        </div>
    );
};



export default Upload;