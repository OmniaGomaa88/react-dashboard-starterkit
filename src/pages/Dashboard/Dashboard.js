import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
import promoService from "../../services/promo";
import formateurService from "../../services/formateur";
import apprenantService from "../../services/apprenant";

const Dashboard = (props) => {
  const [promos, setPromos] = useState([]);
  const [Formateurs, setFormateurs] = useState([]);
  const [apprenants, setApprenant] = useState([]);
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

  useEffect((props) => {
    getPromos();
  }, []);
  useEffect((props) => {
    getFormateurs();
  }, []);
  useEffect((props) => {
    getApprenants();
  });
 

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>les promos </h1>
      <div>
        {promos.map((promo, index) => {
          return <li key={index}>{promo.name}</li>;
        })}
      </div>
      <div>
        <h1>les formateurs</h1>
        {Formateurs.map((formateur, index) => {
          return <li key={index}>{formateur.firstname}</li>;
        })}
      </div>
      <div>
        <h1>les apprenants</h1>
        {apprenants.map((apprenant, index) => {
          return <li key={index}>{apprenant.firstname}</li>;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
