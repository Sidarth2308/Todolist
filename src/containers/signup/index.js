import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import {FirebaseContext} from "../../context/firebase"
import { v4 as uuidv4 } from 'uuid'
import {Snackbar,Paper, Container, Typography, TextField, Button,FormControl, CssBaseline, Grid} from "@material-ui/core"
import {useStyles} from "./styles/signup"
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Signup() {
    const classes = useStyles()
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData]= useState({
        firstName : "",
        email : "",
        password : ""
    });
    const [error, setError] = useState("");

    const handleFormDataChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevValue)=>{
            return {...prevValue, [name] : value}
        })
    }

    const handleSignUp =  (event)=>{
        event.preventDefault();

        firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((result)=>{
            result.user.updateProfile({
                displayName:formData.firstName,
            })

            firebase.firestore().collection(formData.email).add({
                id: uuidv4(),
                title : "Your first TodoList",
                Items: [],
                image : Math.floor(Math.random()*3),
                
            })
        
            .then(()=>{
                history.push(ROUTES.BROWSE);
            })
        })
        .catch(error=>{
            setFormData({
                email : "",
                password:"",
                firstName : ""
            });
            setError(error.message);
            setOpen(true);
        })
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <Container component= "main" maxWidth = "xs">
            {error.length > 0 ?(
                <Snackbar open = {open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                     {error}
                    </Alert>
                </Snackbar>
            ):null}
            <CssBaseline />
            <Paper className = {classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form>
                <TextField
                    value = {formData.firstName}
                    onChange = {handleFormDataChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="First Name"
                    name="firstName"
                    autoFocus
                />
                <TextField
                    value = {formData.email}
                    onChange = {handleFormDataChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    value = {formData.password}
                    onChange = {handleFormDataChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type = "password"
                    name="password"
                    label="Password"
                    id="password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {handleSignUp}
                >Sign Up
                </Button>
                </form>
            </Paper>
        </Container>
        
    )
}
