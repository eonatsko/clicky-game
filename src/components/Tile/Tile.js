import React from "react";
import "./Tile.css"; 

const Tile = props => (
    <div key={props.id} 
        className="col-sm-2  m-sm-3 chi-card" 
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => {
            props.updateScore(props.id)
             props.shuffleTiles(props.image)
            }
            }
        >
    </div>
    
);

export default Tile;