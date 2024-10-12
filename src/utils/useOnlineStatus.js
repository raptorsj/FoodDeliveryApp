//custom hook for verifying intenet connection

import { useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);
    useState(()=> {
         //This event will be triggered when no internet connetion
         window.addEventListener('offline',()=> {
            setOnlineStatus(false);
         });

         //This event will be triggered when internet connetion  is available
         window.addEventListener('online',()=> {
            setOnlineStatus(true);
         });   
    },[]);
   

    return onlineStatus;
}

export default useOnlineStatus;