import { useState } from "react";

const useCapture = ()=>{

    const [IsCapturingImage, setIsCapturingImage]= useState("false")
    const [ImageCaptureAxis, setImageCaptureAxis]= useState({
        x:0,
        y:0
    })

    function CaptureImage(){

    }

    return{CaptureImage};
}

export default useCapture;