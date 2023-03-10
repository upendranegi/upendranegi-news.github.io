import React, {useState} from "react";
import "./css/tex.css";

export default function Textfrom(props){

  
   const handleupclick=()=>{
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();


    if(newtext===""){
        props.salert("Text box is empty" ,"erorr")
    }else{
        props.salert("converted to uppercase" ,"Success");
    }
    setText(newtext);
   
   }

   const handlelowclick =()=>{
    let low= text.toLowerCase();
    if(low===""){
        props.salert("Text box is empty" ,"erorr")
    }
    else{
        props.salert("converted to lowercase" ,"Success");
    }
    setText(low);
   }
   

   const handleclearclick =()=>{
    let ntext = "";
    if(text===""){
        props.salert("Text box is empty" ,"erorr")
    }
    else{
        props.salert("Texted is  clear" ,"Success");
    }
  

    setText(ntext);
   }




   const handlechange=(event)=>{
    console.log("on change");

    setText(event.target.value)
    
   }
   
    const [text, setText]= useState('Enter text here');
    return(
        <>
        <h1 className="head"> {props.heading }</h1>
       
       <form>
            
        <textarea id="mybox" value={text} onChange={handlechange} rows='8'></textarea>
        <br/>
        <button type="button"  className="btn" onClick={handleupclick}><b> Uppercase</b></button>
        <button type="button"  className="btn" onClick={handlelowclick}><b> Lowercase </b></button>
        <button type="button"  className="btn" onClick={handleclearclick}><b> Clear </b></button>
        
        </form>

<div className="summary">
    <h1> Your Text Summary</h1>
    <p>
        <b>{text.split(' ').filter((element)=>{
            return element.length!==0
        }).length-0} word and {text.length} characters </b>
    </p>
    <h2>Preview</h2>
    <pre>{text}</pre>
</div>

        </>
    )
}