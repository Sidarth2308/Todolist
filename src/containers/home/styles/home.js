import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    "@global" :{
        body:{
            backgroundColor : "#4a47a3",
        }
    },
    button : {
        color : "black",
        backgroundColor : "white",
        minWidth : "200px",
        margin : theme.spacing(5),
        minHeight : "50px",
        fontSize : "1.4rem",
        '&:hover': {
            backgroundColor : "#709fb0",
         },
    },
    heroBox:{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        margin : "auto auto",
        marginTop : theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            marginTop : theme.spacing(5),
          },
    },
    heroText : {
        textAlign : "center",
        fontSize : "4rem",
        fontFamily: "Poppins",
        fontWeight : "400",
        [theme.breakpoints.down('sm')]: {
            fontSize : "2.5rem"
          },
        color : "white",
        
    },
    mainText:{
        textAlign : "center",
        fontSize : "7rem",
        fontFamily: "Poppins",
        fontWeight : "800",
        color : "white",
        marginTop : theme.spacing(15),
        [theme.breakpoints.down('sm')]: {
            marginTop : theme.spacing(7.5),
            fontSize : "5rem",
          },
    }

  }));