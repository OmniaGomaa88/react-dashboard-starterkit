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
import useStyles from "../../theme/forms.css";
import MaterialUIPickers from "../../components/FomReservation";

const SalleDetail = (props) => {
  const [salle, setsalle] = useState([]);
  const [error, setError] = useState(false);

  const id = props.match.params.id;

  const getSallById = async (props) => {
    try {
      const SallData = await salleService.getById(id);
      console.log(SallData.data);

      let sallDataArray = Object.values(SallData.data);
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
    <div
      className={classes.cartDetail}
      style={{ marginBottom: "50%", marginLeft: "20%" }}
    >
      <div className={classes.header}> {salle[1]}</div>
      <p>
        <strong>Salle Capacity:</strong> {salle[2]}
      </p>
      <h1 className={classes.formTitle}> Reserver une sale pour un promo </h1>
      <div className={`wrapper ${classes.form}`}>
        <MaterialUIPickers id={id} />
      </div>
    </div>
  );
};
export default SalleDetail;
