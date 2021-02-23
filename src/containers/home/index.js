import React from 'react'
import {AnimatedBox, AnimatedGrid, AnimatedContainer,AnimatedTypography, AnimatedButton} from "../../animated-components"
import {useStyles} from "./styles/home"
import {useSpring, animated} from 'react-spring'
import {useHistory} from "react-router-dom" 
import * as ROUTES from "../../constants/routes"


export default function HomeContainer() {
    const classes =  useStyles()
    const history = useHistory()
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <AnimatedContainer style= {props}>

                <AnimatedTypography className = {classes.mainText} gutterBottom variant="h5" component="h2" >
                TodoList
                
                </AnimatedTypography>
            <AnimatedBox className = {classes.heroBox}>

            
                <AnimatedTypography className = {classes.heroText} gutterBottom variant="h5" component="h2" >
                Cant Remember All Your Tasks?
                
                </AnimatedTypography>
                <AnimatedTypography className = {classes.heroText} gutterBottom variant="h5" component="h2">
                We Got You!
                </AnimatedTypography>
            </AnimatedBox>
                <AnimatedGrid container direction= "row" justify ="center">

                        <AnimatedButton className = {classes.button}onClick = {()=>history.push(ROUTES.SIGN_IN)}>
                            SignIn
                        </AnimatedButton>


                        <AnimatedButton className = {classes.button}onClick = {()=>history.push(ROUTES.SIGN_UP)}>
                            SignUp
                        </AnimatedButton>
                    
                </AnimatedGrid>
            
            
        </AnimatedContainer>
    )
}
