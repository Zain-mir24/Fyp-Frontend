import React from "react";

export default function Insta() {
  function setupInsta() {
    let appId = "1371955883319598";
    let redUri = "http:localhost:3000";
    let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
    window.open(url, "_blank").focus();
  }
  return <div>Insta</div>;
}
