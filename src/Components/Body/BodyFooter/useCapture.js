import { useEffect, useState } from "react";

const useCapture = () => {
  const [IsCapturingImage, setIsCapturingImage] = useState("false");
  const [ImageCaptureAxis, setImageCaptureAxis] = useState({
    x: 0,
    y: 0,
  });

  function ClickEffect(e) {
    setImageCaptureAxis({
      x: `${e.clientX}px`,
      y: `${e.clientY}px`,
    });
    setIsCapturingImage((Capture) => !Capture);
  }

  function CaptureImage() {
    window.addEventListener("mousedown", ClickEffect, false);
  }

  useEffect(() => {
    return () => {
      if (IsCapturingImage) {
        window.removeEventListener("mousedown", ClickEffect);
        ImageCaptureAxis.x = 0;
        ImageCaptureAxis.y = 0;
      }
    };
  }, [IsCapturingImage, ImageCaptureAxis]);

  return { CaptureImage };
};

export default useCapture;
