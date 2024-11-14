import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhml0o3an",
        uploadPreset: "fpq7ynzo",
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  return <div>UploadWidget</div>;
};
export default UploadWidget;
