import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../theme/forms.css";
import promoService from "../services/promo"
import formateurService from "../services/formateur"
import reservationService  from "../services/reservation";
const Forms = (props) => {
    
    const [name, setName] = useState("");
    const [fristName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [stack, setStack] = useState("");
    // useSet Pour reservation
    const[day, setDay]=useState("");
    const[salleId, setSallId]=useState("");
    const[promoId, setPromoId]=useState("");
    

   
  const [error, setError] = useState(null);

  const handleClick = async (name) => {
   await promoService.addPromo( name);
 
 
  };
// HandelClick function pour formateur
  const handleFormateur = async (fristName,lastName,stack) => {
      await formateurService.addFormateur( fristName,lastName,stack);
   
   
    };
    // HndelClick function pour reservation
    const handelClickResirv=async(day, salle_id, promo_id)=>{
      await reservationService.addNew(day, salle_id, promo_id)
    }
  const classes = useStyles();

  return (
    <div>
      <div>
        <div>
        <h1 className={classes.formTitle}> AJOUTER PROMOS </h1>
        </div>
        <div className={`wrapper ${classes.form}`}>
            
          <br />
          <TextField
            className="input"
            label="name"
            onChange={(e) => setName(e.target.value)}
          />
       
         
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={(event) => handleClick(name)}
          >
            Submit
          </Button>
        </div>
        <h1 className={classes.formTitle}> AJOUTER FORMATEURS </h1>
        <div className={`wrapper ${classes.form}`}>
      
       
          <TextField
            className="input"
            label="firstname"
            onChange={(e) => setFristName(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="stack"
            onChange={(e) => setStack(e.target.value)}
          />
          <br />
        
          <Button
            variant="outlined"
            color="primary"
            onClick={(event) => handleFormateur(fristName,lastName,stack)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
