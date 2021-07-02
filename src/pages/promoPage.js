import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
import salleService from "../services/salle";
import promoService from "../services/promo";
import formateurService from "../services/formateur";
import Reserve from "../components/ReservationsPromo";
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
import reservationService from "../services/reservation";
const PromoPage = (props) => {
  const [promo, setPromo] = useState([]);
  const [reserve, setReserve] = useState([]);

  const [error, setError] = useState(false);
  const PromoId = props.match.params.id;
  const getPromoById = async (props) => {
    try {
      const PromoData = await promoService.getById(PromoId);
      let promoDataArray = Object.values(PromoData.data);

      setPromo(promoDataArray);
    } catch (error) {
      setError(true);
    }
  };
  //   function pour get reserverstion pour un promo
  const reserveBypromoId = async (props) => {
    try {
      const reservData = await reservationService.getByPromo(PromoId);

      setReserve(reservData.data);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    reserveBypromoId();
  }, []);
  useEffect(() => {
    getPromoById();
  }, []);
  console.log(reserve);
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
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

      <Typography
        variant="h6"
        color="primary"
        className={classes.header}
        onClick={(event) => handleClick("APPRENNANTS")}
      >
        LES APPRENNANTS
      </Typography>
      <div>
        <Typography
          variant="h6"
          color="primary"
          style={{ marginBottom: "5%" }}
          className={classes.header}
        >
          LES RESERVATIONS DES SALLES
        </Typography>
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
            <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}>
          <h2>Les dates</h2>
          {reserve.map((res, index) => {
            return (
              <p key={index} style={{ color: "black" }}>
                {" "}
              <p>{res.day}</p>  
              </p>
            );
          })}
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}  >
             <h2>Les salles</h2>
          {reserve.map((res, index) => {
            return (
              <p key={index} style={{ color: "black" }}>
                {" "}
              <p>{res.Salle.name}</p>  
              </p>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PromoPage;
