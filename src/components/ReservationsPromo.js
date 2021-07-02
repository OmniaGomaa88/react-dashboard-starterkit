import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
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
import useStyles from "../theme/forms.css";
import  reservationService  from "../services/reservation";

const Reserve = (props) => {
  const [reserve, setReserve] = useState([]);
  const [error, setError] = useState(false);
  const PromoId = props.PromoId;
  const reserveBypromoId = async (props) => {
    try {
      const reservData = await reservationService.getByPromo(PromoId);
      console.log(reservData.data);
      setReserve(reservData);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    reserveBypromoId();
  }, []);

  const classes = useStyles();
  return (
    <div>
   <p> les Rservaiob</p>{reserve.day}
    </div>
  );
};
export default Reserve;