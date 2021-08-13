import React from "react";
const style={
  float:"left"
}
export default function Sidebar() {
  return <div style={style}>
  <ul>

      <li>
        User update
      </li>
      <li>
        User Info
      </li>
      <li>
        User Delete
      </li>
      <li>
        Check donations
      </li>
      </ul>;
  </div>;
}
