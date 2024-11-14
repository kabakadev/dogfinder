import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);
  }, []);

  return <div>UploadWidget</div>;
};
export default UploadWidget;
