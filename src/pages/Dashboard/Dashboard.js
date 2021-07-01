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
import { display } from "@material-ui/system";
import Forms from "../../components/forms";
import useStyles from "../../theme/forms.css";

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
console.log(Salls)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {error && <p>{error}</p>}
        <List className={classes.cart}>
          <div className={classes.cartDetail}>
            <Typography variant="h6" color="primary" className={classes.header}>
              LES PROMOS
            </Typography>

            {promos.map((promo, index) => {
              return <ListItem key={index}>{promo.name}</ListItem>;
            })}
          </div>
          <div className={classes.cartDetail}>
            <Typography variant="h6" color="primary" className={classes.header}>
              LES FORMATEURS
            </Typography>
            {Formateurs.map((formateur, index) => {
              return (
                <div key={index}>
                  <p>
                    <strong>Frist Name: </strong> {formateur.firstname}
                  </p>

                  <p>
                    {" "}
                    <strong>last Name:</strong> {formateur.lastname}
                  </p>
                  <p>
                    {" "}
                    <strong>stack:</strong> {formateur.stack}
                  </p>
                </div>
              );
            })}
          </div>
        </List>

        <List className={classes.cart}>
          <div className={classes.cartDetail}>
            <Typography variant="h6" color="primary" className={classes.header}>
              LES APPRENNANTS
            </Typography>
            {apprenants.map((apprenant, index) => {
              return <ListItem key={index}>{apprenant.firstname}</ListItem>;
            })}
          </div>
          <div className={classes.cartDetail} style={{ marginBottom: "50%" }}>
            <Typography variant="h6" color="primary" className={classes.header}>
              LES SALLS
            </Typography>
            {Salls.map((Salle, index) => {
              return (
                <ListItem key={index}>
                 <p style={{marginLeft:"5%"}}><strong>Nom De salle:</strong>{Salle.name}</p> 
                  <Button variant="contained" color="primary" href={'/salle/'+ Salle.id} >
                    Voir le salle
                  </Button>
                </ListItem>
              );
            })}
          </div>
        </List>
      </div>
      <Forms></Forms>
    </div>
  );
};

export default Dashboard;
