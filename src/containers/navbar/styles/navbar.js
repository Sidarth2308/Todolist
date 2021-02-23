import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor : "#83aacf"
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
      color: "white",
      fontSize : "3rem",
      fontFamily: "Poppins",
      fontWeight : "200"
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    button : {
        margin: theme.spacing(1, 1.5),
        color : "white"
    }
  }));