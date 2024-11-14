import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhml0o3an",
        uploadPreset: "fpq7ynzo",
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  return <button onClick={() => widetRef.current.open()}> Upload Image</button>;
};
export default UploadWidget;
