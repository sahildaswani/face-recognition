import React from 'react';
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className="f3">
                This magic brian will detect faces in your pictures. Give it a try.
            </p>
            <div className="center">
                <div className="pa4 br3 shadow-4 form center imageFormDiv">
                    <input type="text" className="f4 pa2 w-70 center" id="input" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" id="btn" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;