import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
import salleService from "../services/salle";
import promoService from "../services/promo";
import formateurService from "../services/formateur";

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

const PromoPage = (props) => {
  const [promo, setPromo] = useState([]);
  const [error, setError] = useState(false);
  const id = props.match.params.id;
  const getPromoById = async (props) => {
    try {
      const PromoData = await promoService.getById(id);
      let promoDataArray = Object.values(PromoData.data);
      console.log(PromoData.data);
      setPromo(promoDataArray);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getPromoById();
  }, []);
  console.log(promo);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.PromoTitle}>
        {" "}
        <p>
          <strong> Promo {promo[1]}</strong>
        </p>{" "}
      </div>
      <Typography
        variant="h6"
        color="primary"
        className={classes.header}
        onClick={(event) => handleClick("Formateur")}
      >
        LES FORMATEURS
      </Typography>
    </div>
  );
};
export default PromoPage;
