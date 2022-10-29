import { useEffect, useRef } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const { data } = useQuery(QUERY_ME);
  const userdata = data?.me || {};

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dkqszfipi",
        uploadPreset: "mj0ylsvt",
        publicId: `${userdata.username}${userdata.listingId}`,
      },
      function (err, result) {
        console.log(result);
      }
    );
  }, [userdata.username, userdata.listingId]);
  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
}
// https://www.youtube.com/watch?v=paiO6M2wBqE&ab_channel=Cloudinary
export default UploadWidget;
