import React, { useState } from 'react';
import {Popover} from 'react-bootstrap'

const ShowDescription = (props) =>{
    const [showDesc, setShowDesc]=useState(false);
    
    return(
        <div >
            {/* {props.open ? ( */}
               <Popover id="popover-basic">
               <Popover.Content>
                   <div><b>Discription:</b></div>
                 {props.desc}
               </Popover.Content>
             </Popover>
            {/* ) : null} */}
        </div>
    )
}

export default ShowDescription