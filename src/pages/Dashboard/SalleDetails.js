import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
import salleService from "../../services/salle";
import { matchPath } from "react-router";
import {
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  TextField,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Forms from "../../components/forms";
import useStyles from "../../theme/forms.css";

const SalleDetail = (props) => {
  const [salle, setsalle] = useState([]);
  const [error, setError] = useState(false);
  const id = props.match.params.id;
  const getSallById = async (props) => {
    try {
      const SallData = await salleService.getById(id);
    console.log(SallData.data)
  
  let sallDataArray=  Object.values(SallData.data);
      setsalle(sallDataArray);
     
    
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getSallById();
  }, []);
  console.log(salle);
  const classes = useStyles();
  return (
    <div className={classes.cartDetail} style={{ marginBottom: "50%" ,marginLeft:"40%"}}>
     <div className={classes.header}> {salle[1]}</div> 
     <p><strong>Salle Capacity:</strong> {salle[2]}</p>
    
    </div>
   
  );
};
export default SalleDetail;
