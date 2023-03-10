import React from "react";
import './css/alert.css'

export default function Alert(props){
    return(
  
    
  <div className="al">
 {props.alert &&  <div className="alert">
  
  <p>
 <strong>{props.alert.type}</strong> :{props.alert.msg}
 </p> </div>}
    </div>
    
  
    )
}
