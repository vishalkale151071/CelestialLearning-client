import { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";

const crypto = require("crypto"); // crypto comes with Node.js

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
  return new Promise((res, rej) => {
   
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = crypto
      .createHmac("sha256", apiSecret)
      .update(msg)
      .digest("base64");
    const signature = Buffer.from(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");

    res(signature);
  });
}

var apiKey = '5W1c0P6RS5mRzJvdjIgqDQ'
var apiSecret = 'Dp3orf9HuSX5TQ2PPzQOwLkGBEfY2HB3aHo5'
var meetingNumber = 96523655531
var leaveUrl = 'http://localhost:3000/subscriber/dashboard'
var userName = 'WebSDK'
var userEmail = 'saumyasinha38@gmail.com'
var passWord = 'Ypn64h'
var signature = "";
generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
    signature = res;
  });
const Zoom = () =>{

    useEffect(() => {
        showZoomDIv();
        ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.0/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        initiateMeeting();
      }, []);

      const showZoomDIv = () => {
        document.getElementById("zmmtg-root").style.display = "block";
      };

      const initiateMeeting = () =>{

        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
              console.log(success);
      
              ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber,
                userName: userName,
                apiKey: apiKey,
                userEmail: userEmail,
                passWord: passWord,
                success: (success) => {
                  console.log(success);
                },
                error: (error) => {
                  console.log(error);
                },
              });
            },
            error: (error) => {
              console.log(error);
            },
          });

      }
    return <div>Zoom</div>;
}

export default Zoom