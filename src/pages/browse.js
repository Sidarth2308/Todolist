import React,{useContext} from 'react'
import {NavbarContainer} from "../containers"
import {AnimatedList} from "../components"
import {useAuthListener, useLists} from "../hooks"

function SecondaryData(data){
    if (data === null){
        return "series"
    }else{
        return data.user.email
    }
}

export default function Browse() {
    const user = useAuthListener()
    const secondary = SecondaryData(user)
    const data = useLists(secondary);
    return (
        <div>
            <NavbarContainer />
            <AnimatedList fetchedLists = {data.content} collection = {user.user.email} />
        </div>
    )
}
