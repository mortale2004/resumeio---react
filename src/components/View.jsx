import { useEffect } from "react";

const View =({children})=>{
    
    
    const handleViewClick = ()=>{
        document.documentElement.style.setProperty("font-size", "15px");
        document.getElementsByClassName("wrapper")[0].style.setProperty("width", "100%");
        document.getElementsByClassName("wrapper")[0].style.setProperty("height", "180vh");
        document.getElementsByClassName("wrapper")[0].style.setProperty("position", "static");
        document.getElementsByClassName("wrapper")[0].style.setProperty("padding", "3rem");
    
        document.getElementsByClassName("resume")[0].style.setProperty("height", "100%");
        document.getElementsByClassName("resume")[0].style.setProperty("aspect-ratio", "6/9");
        document.getElementsByClassName("resume")[0].style.setProperty("width", "unset");    
    }



  useEffect(()=>{
    handleViewClick();
  },[])


    return(
        <>
            {children}   
        </>
    )
}

export default View;