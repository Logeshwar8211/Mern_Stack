import React ,{useState} from "react";
import './drop.css';

function Dropdown(){
    const [country,setcountry] =useState("");
    return( 
        <>
        
        <h1 className={country}>Selected Country is {country}</h1>
        <select className="country" onChange={(e)=> setcountry(e.target.value)}
            defaultValue={country}
        >
            <option>India</option>
            <option>Australia</option>
            <option>England</option>
            <option>New Zealand</option>
        </select>
        </>
    );
}
export default Dropdown;