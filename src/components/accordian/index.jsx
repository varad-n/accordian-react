import { useState } from "react";


export default function Accordian(){

    const[selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){

    }
    

    return (
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={handleSingleSelection} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data Found!</div>
                )
            }
        </div>
    </div>
    )
};