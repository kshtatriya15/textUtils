import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter text here ");

  const handleUpUpper = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!" , "success");
    
  };
  const handleUpLower = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!" , "success");
  };

  const handleUpClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!" , "success");
  };
  const handleUpCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");

    text.select();
    // pura text select  karr leta hae

    navigator.clipboard.writeText(text.value);
    // copying text to the clipboard
    props.showAlert("Text copied to clipboard!" , "success");
  };
  const handleUpSpace = () => {
    console.log("remove space is clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!" , "success");
  };

  const handleAllowWrite = (event) => {
    console.log("onCHANGE");
    setText(event.target.value);
  };

  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleAllowWrite}
            id="myBox"
            rows="8"
            style={{
              background: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary btn-sm mx-2"
            onClick={handleUpUpper}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm mx-2"
            onClick={handleUpLower}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm mx-2"
            onClick={handleUpClear}
          >
            Clear Text
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm mx-2"
            onClick={handleUpCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm mx-2"
            onClick={handleUpSpace}
          >
            Remove extra space
          </button>
        </div>
      </div>
      <div
        className="container"
        my-5
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>Average Time to Read: {0.008 * text.split(" ").length} minutes</p>
        <h4>Preview:</h4>
        <p>{text.length>0 ? text:"Enter some text to Preview"}</p>
      </div>
    </>
  );
}

// const handleUpFinder = () =>
// {
//     console.log("search world is clicked !");
//     let TextToSearch = prompt('Enter the word you want to search');
//     let results = text.indexOf(TextToSearch);
//     if(results!=-1){ alert(` word ${TextToSearch} found!`)}
//     else{ alert(` word ${TextToSearch}  not found!`)}
// }
// const handleUpTrim=()=>
// {
//     console.log("remove white space is  clicked!");
//     let newText = text.split(" ").join('');
//     setText(newText);
// }
// const handleUpReplace = ()=>
// {
//     console.log("replaced is clicked !");
//     let TextToReplace =  prompt('enter the String for replacement');
//     let  TextToReplaceWith = prompt('Enter the Text you want to put in place of the previous one');
//     let newText = text.replace(TextToReplace , TextToReplaceWith);
//     setText(newText);
// }
// const [myStyle , setmyStyle] = useState( {
//     color : 'black',
//     backgroundColor: 'white'
// })
// const [btntext , setbtntext] =useState("Enable Dark mode")
// const toggleStyle = () =>
// {
//     if(myStyle.color ==='white')
//     {
//         setmyStyle({
//             color : 'black',
//             backgroundColor : 'white',

//         })
//         setbtntext("Enable Dark Mode");
//     }
//     else{
//         setmyStyle({
//             color:'white',
//             backgroundColor:'black',

//         })
//         setbtntext("Enable Light Mode");
//     }
// }
// const [BaseStyle , setBaseStyle] = useState("Bold");
// const handleUpBaseFont=()=>
// {
//     console.log("bold is clicked");
// }
