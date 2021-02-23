import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    button : {
        margin: theme.spacing(1, 1.5),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardTitle:{
        margin : "auto",
        marginBottom : theme.spacing(2),
        marginTop : theme.spacing(4),
      },
      cardContent: {
        flexGrow: 1,
        display:"flex",
        flexDirection : "column",
        justifyContent : "space-between",
        maxHeight : '300px',
        
      },
      cardBox:{
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center",
        marginBottom : theme.spacing(0.1),
      },
      scrollable:{
        maxHeight : '400px',
        overflow: "auto",
      },
      listItemText:{
        cursor : "pointer"
      },
      addIcon :{
        marginRight : theme.spacing(1)
      },
      Fab:{
        display: "flex",
        justifyContent : "center",
      },
      titleChangeField:{
        margin:"auto",
        maxWidth : "100px",
        fontSize : "2rem",
        border : "none",
      },
      titleForm : {
        display: "flex",
        marginBottom : theme.spacing(2),
        marginTop : theme.spacing(4),
        fontSize : "2rem",
        
      },
      underline: {
        fontSize : "1.4rem",
        width: "auto",
        "&&&:before": {
          borderBottom: "none"
          
        },
        "&&:after": {
          borderBottom: "none"
        }
      },
      deleteIcon:{
        display : "flex",
        justifyContent : "space-around",
      }
  }));