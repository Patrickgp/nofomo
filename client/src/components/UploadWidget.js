import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dk05bpck6",
        uploadPreset: "ppdspvfz",
      },
      function (err, result) {
        console.log(result);
      }
    );
  }, []);
  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
};
// https://www.youtube.com/watch?v=paiO6M2wBqE&ab_channel=Cloudinary
export default UploadWidget;
