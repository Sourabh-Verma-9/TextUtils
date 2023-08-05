import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleInverse = () =>{
            let s = '';
            let i = 0;
            while (i < text.length) {
                let n = text.charAt(i);
                    if (n === n.toUpperCase()) {
                        n = n.toLowerCase();
                    }
                    else {
                        n = n.toUpperCase();
                    }
            
             i +=1; 
             s += n;}
        setText(s);
        props.showAlert("Converted to Inversecase","success")
    }
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
    const [text,setText] = useState("Enter your text")
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
            <h1>
                {props.heading}
            </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>   
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleInverse}>Convert to Inversecase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary       </h1>
        <p>{text.split(" ").length - 1} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").length } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in above space to get preview"}</p>
    </div>
    </>
  )
}
