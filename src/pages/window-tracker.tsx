import { useEffect, useState } from "react"

export default function WindowTracker(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(true);
   
    useEffect(()=>{

        function watchWidth(){
            console.log("running");
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize",watchWidth);

        return function(){
            console.log("clean");
            window.removeEventListener("resize",watchWidth);
        }
    },[])

    function handleToggle(){
        setToggle(!toggle);
    }
  

    
    return (
        
        <div>
            <pre>State; Conditional statement</pre>

            <button className="showTrackerBtn" onClick={handleToggle}> {!toggle? 'Show': 'Hide'} tracker</button>
            
            {toggle && <div>window width : {windowWidth}</div> }
        </div>
    )
}