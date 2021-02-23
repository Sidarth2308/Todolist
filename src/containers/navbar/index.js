import React, {useContext} from 'react'
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {useStyles} from "./styles/navbar"
import CssBaseline from '@material-ui/core/CssBaseline';
import {FirebaseContext} from "../../context/firebase"
import {useHistory} from "react-router-dom"
import * as ROUTES from "../../constants/routes"

export default function NavbarContainer() {
    const classes = useStyles();
    const {firebase } = useContext(FirebaseContext);
    const history = useHistory();
    return (
        <>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    TodoList
                </Typography>
                <Button color="primary" variant="outlined" onClick={() => {
                    firebase.auth().signOut()
                    history.push(ROUTES.SIGN_IN)
                }
                    

                    } 
                    className={classes.button}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
        </>
    )
}
