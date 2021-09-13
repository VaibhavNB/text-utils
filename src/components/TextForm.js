import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper case','success')
    
  }
  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower case','success')

  }
  const handleClearText = ()=> {
    setText("");
    props.showAlert('Text has been cleared','success')

  }
  const handleCopyText = ()=> {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text has been copied','success')

  }
  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces are removed.','success')

  }
  const [text, setText] = useState("");

  return (
    <>
      <div className="container m-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.title}</h1>
        <div class="mb-3">
          <textarea
            style={{backgroundColor: props.mode==='dark'?'#011d6b':'white',
            color: props.mode==='light'?'black':'white',
        
    transition: ' 0.6s all'}}
            value={text}
            class="form-control"
            id="mybox"
            rows="10"
            onChange={handleOnChange}
            placeholder='Enter your text...'
          ></textarea>
          <button
            type="button"
            class="btn btn-primary mx-2 my-3"
            onClick={handleUpClick}
          >
            Upper Case
          </button>
          <button
            type="button"
            class="btn btn-warning my-3"
            onClick={handleLoClick}
          >
            Lower Case
          </button>
          <button
            type="button"
            class="btn btn-info mx-2 my-3"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            type="button"
            class="btn btn-light my-3"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            class="btn btn-danger mx-2 my-3"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 className="my-2">Your text summary</h2>
        <p>{`${text.split(" ").length} words, and ${text.length} characters`}</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the box to preview.'}</p>
      </div>
    </>
  );
}
