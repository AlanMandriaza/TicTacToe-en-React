
import React from "react";

const Tablero= ({squares})=>
{

    const createSquares=values=>(
        values.map(value=>(
            <div>{value}</div>
        ))
    )



return(
    <>
    <div className="tablero">
        <div className="row">
            {createSquares[0,1,2]}sdf
        </div>
        <div className="row">
            {createSquares[4,5,6]}sdf
        </div>
        <div className="row">
            {createSquares[7,8,9]}sdf
        </div>
    </div>
    </>
)
}
export default Tablero;