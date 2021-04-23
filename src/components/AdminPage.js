import React, {Component} from 'react';
import * as axios from 'axios';
export default function AdminPage(){
    const [selectedFile, setSelectedFile] = React.useState()
    function handleChange(event) {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setSelectedFile(img)
        }
        console.log("Printing the files", event.target.files)
    }
    function handleClick(event){
                
        const formData = new FormData(); 
        formData.append("myFile" , selectedFile)
        console.log("testing the state " , selectedFile)

        // console.log(e.target.files[0])
        var url = "https://6mxztgypwh.execute-api.us-east-2.amazonaws.com/handleUpload4"; // api link here
        // console.log(file);
        // console.log(e.target.files[0])
        fetch(url, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ "request": "uploadFile", "key": "pranay"}),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                console.log(res['body']['URL'])
                console.log(typeof(res['body']))
                console.log(selectedFile);
                console.log(typeof(selectedFile));

                fetch(res['body']['URL'], {
                    method: "POST",
                    mode: "cors",
                    headers: { "Access-Contol-Allow-Origin": "*" },
                    body: selectedFile
                    // body: e.target.files[0],
                })
                    // .then((res) => { return res.json() })
                    .then((res) => {
                        console.log("Upload File Response From AWS",res)
                        setSelectedFile("")
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }
    return(
        <div>
            <h1>Upload Image</h1>
            <input type ="file" name = "Upload Image" onChange = {handleChange}/>
            <input type = "button" onClick = {handleClick}/>
        </div>
    );
}
