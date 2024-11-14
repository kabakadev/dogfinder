import { useEffect, useRef } from "react";

const UploadWidget = ({ setImageUrl }) => {
  const cloudinaryRef = useRef();
  const widetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "placeholder",
        uploadPreset: "placeholder",
      },
      function (error, result) {
        const image = result.info.secure_url;
        // console.log(image);
        setImageUrl(image);
        // const response = await fetch("http://localhost:3000/breeds", {
        //   method: "POST",
        //   body: { image },
        // });
      }
    );
  }, [setImageUrl]);

  return (
    <button type="button" onClick={() => widetRef.current.open()}>
      {" "}
      Upload Image
    </button>
  );
};
export default UploadWidget;
