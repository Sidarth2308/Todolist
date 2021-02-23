import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import {FirebaseContext} from "../../context/firebase"
import {Snackbar, Paper, Container, Typography, TextField, Button,FormControl, CssBaseline, Grid} from "@material-ui/core"
import {useStyles} from "./styles/signin"
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

export default function SigninContainer() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
        email : "",
        password: ""
    });
    const [error, setError] = useState(""); 
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory();
    const handleFormDataChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevValue)=>{
            return {...prevValue, [name] : value}
        })
    }
    
    const handleSignin = (event)=>{
        event.preventDefault();
        
        firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(()=>{
            history.push(ROUTES.BROWSE);
        })
        .catch((error)=>{
            setFormData({email:"", password:""});
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
                    Sign In
                </Typography>
                <form>
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
                    onClick = {handleSignin}
                >Sign In
                </Button>
                </form>
            </Paper>
        </Container>
    )
}
