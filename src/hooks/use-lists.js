import {useEffect, useState, useContext} from "react";
import {FirebaseContext} from "../context/firebase";

export default function useLists(target=""){
    const [content, setContent] = useState([])
    const {firebase} = useContext(FirebaseContext);
    let isMounted = true;

    useEffect(()=>{
            firebase
            .firestore()
            .collection(target)
            .onSnapshot((snapshot)=>{
                const allContent = snapshot.docs.map((contentObj)=>{  
                    return({
                    ...contentObj.data(),
                    docId : contentObj.id,
                    })
                })
                if(isMounted)
                setContent(allContent);
            })
        return()=>{
            isMounted = false;
        }
        
            
    },[target])
    return {content};
}

