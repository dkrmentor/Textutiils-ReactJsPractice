import React, { useState, useRef } from 'react'





export default function Textform(props) {
    const [text, setText] = useState('')

    const handleOnChange = (e) => {
        setText(e.target.value)

    }
    const OnUp = () => {
        setText(text.toUpperCase())
        props.showAlert("UpperCase", "success")

    }
    const OnDown = () => {
        setText(text.toLowerCase())
        props.showAlert("LowerCase", "success")

    }
    const toDefault = () => {
        setText("Nothing To Preview")
        props.showAlert("DefaultText", "success")

    }
    const allClear = () => {
        setText("")
        props.showAlert("AllClear", "success")

    }


    const RemoveSpace = () => {
        // setText(text.split(/\s+/).join(" "))
        // OR
        setText(text.split(/\s+/).join(" "))
        props.showAlert("RemoveSpaces", "success")


    }
    const refSelect = useRef(null);

    const Copy = () => {
        refSelect.current.select()
        navigator.clipboard.writeText(text)
        props.showAlert("UpperCase", "success")

    }
    // const Capitalize=(text)=>{

    //     setText(text.charAt(0).toUpperCase()+text.slice(1).toLowerCase())
    // }

    return (


        <div className={`container my-3 text-${props.mymode === 'light' ? 'dark' : 'light'} `}>
            <div className="my-3">
                <label htmlFor="mybox" className="form-label"><h2>{props.textareaheading}</h2></label>
                <textarea ref={refSelect} value={text} onChange={handleOnChange} className="form-control" id="mybox" rows="8"></textarea>
            </div>

            <div className="my-3">
                <div onClick={OnUp} className={`btn btn-${props.mymode === 'light' ? 'dark' : 'light'} m-2 `}>
                    Convert To UpperCase
                </div>

                <div onClick={OnDown} className={`btn btn-${props.mymode === 'light' ? 'dark' : 'light'} m-2 `}>
                    Convert To LowerCase
                </div>

                <div onClick={toDefault} className={`btn btn-${props.mymode === 'light' ? 'dark' : 'light'} m-2 `}>
                    Convert To Default
                </div>

                <div onClick={allClear} className={`btn btn-${props.mymode === 'light' ? 'dark' : 'light'} m-2 `}>
                    Clear
                </div>

                <div onClick={Copy} className={`btn btn-${props.mymode === 'light' ? 'dark' : 'light'} m-2 `}>
                    Copy
                </div>
                <div onClick={RemoveSpace} className={`btn btn-${props.mymode === 'light' ? 'dark' : 'light'} m-2 `}>
                    RemoveSpace
                </div>
                {/* <div onClick={Capitalize} className={`btn btn-${props.mymode === 'light' ?  'dark' : 'light'} m-2 `}>
                Capitalize
                </div> */}
            </div>



            <div className="mb-3">



                <label>
                    <h4>{props.textheading}</h4>
                </label>


                <p>
                    {text ?
                        text.split(/\s+/).filter((e) => { return e.length !== 0 }).length : 0} Words
                </p>
                <p>
                    {text.length} Letters
                </p>

                <p>
                    {text ? text.trim().split(/\s+/).length * 0.008 : 0} minutes would be required for reading it.
                </p>


                <label>
                    <h5>PREVIEW</h5>
                </label>
                <p>
                    {text ? text : "Nothing To Preview"}
                </p>


            </div>
        </div>
    )
}
