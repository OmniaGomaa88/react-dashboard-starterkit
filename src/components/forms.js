import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../theme/forms.css";
import promoService from "../services/promo"

const Forms = (props) => {
    
    const [name, setName] = useState("");
   
  const [error, setError] = useState(null);

  const handleClick = async (name) => {
  let response=  await promoService.addPromo( name);
 
 
  };

  const classes = useStyles();

  return (
    <div>
      <div>
        <div>
          <h1 className={`wrapper ${classes.header}`} >Forms</h1>
        </div>
        <div className={`wrapper ${classes.form}`}>
            <h1 className={classes.formTitle}> AJOUTER PROMOS </h1>
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
        <div className={`wrapper ${classes.form}`}>
        <h1 className={classes.formTitle}> AJOUTER FORMATEURS </h1>
          <TextField
            className="input"
            label="id"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="firstname"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="lastname"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="stack"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="created at"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="updated at"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={(event) => handleClick(event)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
