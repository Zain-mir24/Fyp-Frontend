import React from "react";
import "./campaign.css";
import { Button } from "antd";
function Campaignrender(props) {
  console.log(props, "my props");
  return (
    <div>
      <article>
        <img
          style={{ width: "100%", borderRadius: "5px" }}
          src={"https://damp-stream-39096.herokuapp.com/uploads/" + props.img}
        ></img>
        <div className="camp">
          <header className="campHead">
            FLOWERS IN YOUR GARDEN. THE BEST SORTS OF FLOWERS FOR OUTDOORS.
            <div>
              <span style={{color:"#a1a2a4"}}>By Global reach</span>
            </div>
          </header>
          <div className="campDesc">
            From art market mainstays to persistent provocateu. It was a tall
            order and a picky search for us, when we tasked ourselves with
            determining an ultimate list of the greatest living modern artists.
            Chances are, that the list below will be debated by many but alas…
            When you need your company...
          </div>
          <div>
            <Button
              className="mybtn"
              style={{ backgroundColor: "#62be1e", color: "#ffffff" }}
            >
              More Details
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Campaignrender;
