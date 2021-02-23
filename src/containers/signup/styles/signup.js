import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    '@global': {
      body:{
        backgroundImage: `url(${"images/backgrounds/signin.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color : "white",
        minHeight : "73vh",
      }
    },
    
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      
    },  
    paper: {
      marginTop: theme.spacing(25),
      padding : "20px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));