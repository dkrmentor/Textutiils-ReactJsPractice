import React from 'react';
import { useState } from 'react';

export default function About() {


    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border:'1px solid black',

    });
    const [btnText, setbtnText] = useState('Dark Mode');
    const ToggleStyle =()=>{
        myStyle.color === 'black'? 
        setStyle({color: 'white',
        backgroundColor: 'black',
        border:'1px solid white'},  setbtnText('Light Mode'))
       
        :
        setStyle({color: 'black',
        backgroundColor: 'white',
        border:'1px solid black'} , setbtnText('Dark Mode'))
        
    }
    return (
        <div style={myStyle}  className='container my-3' >
            <h1 className='m-3'>
                About Us
            </h1>
            <div style={myStyle}  className="accordion" id="accordionExample">
                <div style={myStyle}  className="accordion-item">
                    <h2 style={myStyle}  className="accordion-header" id="headingOne">
                        <button style={myStyle}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" style={myStyle}  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div style={myStyle}  className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle}  className="accordion-item">
                    <h2 style={myStyle}  className="accordion-header" id="headingTwo">
                        <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle}  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div style={myStyle}  className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle}  className="accordion-item">
                    <h2 style={myStyle}  className="accordion-header" id="headingThree">
                        <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" style={myStyle}  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div style={myStyle}  className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={ToggleStyle}  style={myStyle} className="btn m-2"> {btnText}</div>


        </div>
    );
}
