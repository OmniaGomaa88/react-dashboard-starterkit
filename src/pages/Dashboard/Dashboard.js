import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
import promoService from "../../services/promo";
import formateurService from "../../services/formateur";
import apprenantService from "../../services/apprenant";
import salleService from "../../services/salle";
import Container from "@material-ui/core/Container";
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
import AddIcon from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// créer des class

const useStyles = makeStyles({
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
    flexDirection: "row",
    justifyContent: "space-evenly",
   

  },
});

const Dashboard = (props) => {
  const [promos, setPromos] = useState([]);
  const [Formateurs, setFormateurs] = useState([]);
  const [apprenants, setApprenant] = useState([]);
  const [Salls, setSalls] = useState([]);
  const [error, setError] = useState(false);
  const isInitialMount = useRef(true);

  // function de get Promos
  const getPromos = async () => {
    try {
      const promosdata = await promoService.getAll();
      setPromos(promosdata.data);
    } catch (error) {
      setError(true);
    }
  };
  // function pour get formteur
  const getFormateurs = async () => {
    try {
      const FormateursData = await formateurService.getAll();
      setFormateurs(FormateursData.data);
      console.log(FormateursData.data);
    } catch (error) {
      setError(true);
    }
  };
  // function pour get apprenants
  const getApprenants = async () => {
    try {
      const apprenantData = await apprenantService.getAll();
      setApprenant(apprenantData.data);
    } catch (error) {
      setError(true);
    }
  };
  // function pour set salls
  const getSalls = async () => {
    try {
      const sallsData = await salleService.getAll();
      setSalls(sallsData.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect((props) => {
    getPromos();
  }, []);
  useEffect((props) => {
    getFormateurs();
  }, []);
  useEffect((props) => {
    getApprenants();
  }, []);
  useEffect((props) => {
    getSalls();
  }, []);
  const classes = useStyles();

  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      {error && <p>{error}</p>}
      <List className={classes.cart}>
        <div>
          <Typography variant="h6" color="primary" className={classes.header}>
            LES PROMOS
          </Typography>

          {promos.map((promo, index) => {
            return <ListItem key={index}>{promo.name}</ListItem>;
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" color="primary" className={classes.header}>
            LES FORMATEURS
          </Typography>
          {Formateurs.map((formateur, index) => {
            return <ListItem key={index}>{formateur.firstname}</ListItem>;
          })}
        </div>
      </List>

      <List className={classes.cart}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" color="primary" className={classes.header}>
            LES APPRENNANTS
          </Typography>
          {apprenants.map((apprenant, index) => {
            return <ListItem key={index}>{apprenant.firstname}</ListItem>;
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" color="primary" className={classes.header}>
            LES SALLS
          </Typography>
          {Salls.map((Sall, index) => {
            return <ListItem key={index}>{Sall.name}</ListItem>;
          })}
        </div>
      </List>
    </Container>
  );
};

export default Dashboard;
