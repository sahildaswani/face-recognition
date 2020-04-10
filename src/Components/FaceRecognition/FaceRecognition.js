import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imgURL, box }) => {
    return(
        <div className = "center ma3" style={{position: "relative", width: "50vw"}}>
            <img id="img" src={ imgURL } alt="" style={{width: "50vw", height: "auto"}}/>
            {AddFaceBox(box)}
        </div>
    );
}

const AddFaceBox = (box) => {
    var result = [];

    if (box != null) {
        for (const key in box) {
            if (box.hasOwnProperty(key)) {
                const element = box[key];
            result.push(<div className="bounding-box" style={{top: element.topRow, left: element.leftCol, right: element.rightCol, bottom: element.bottomRow}}></div>)
            }
        }

        return(
            result
        );
    }
}

export default FaceRecognition