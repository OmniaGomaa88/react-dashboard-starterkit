import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        loginForm: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(10)
        },
        form:{
            border:"2px solid blue",
            width:"100%",
            display: 'flex',
            flexDirection: 'column',
            float:"rigth",
            marginTop:"5%"

        },
        header: {
            backgroundColor: "#0F5298",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            height: 48,
            width: "300px",
            color: "white",
            paddingLeft: "4%",
            paddingTop: "4%",
            marginTop:"5%"
          },
          cart: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            
          },
          cartDetail:{
            display: "flex", flexDirection: "column"
          },
          formTitle:{
          fontSize:"20px",
          color:"white",
          fontWidth:"bold",
          backgroundColor:"#0F5298",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

          },
          hide:{
            display:"none"
          },
         apear:{
           display:"block"
         },
         PromoTitle:{
           fontSize:"40px",
           color:"#0F5298",
           textShadow:" 2px 4px rgba(255, 105,135, .3)"
         }
    }),
);

export default useStyles;