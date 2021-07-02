import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import reservationService from "../services/reservation";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
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
import { useState } from "react";
import { matchPath } from "react-router";

export default function MaterialUIPickers(props) {
  const [prompId, SetPromoId] = React.useState("");
  
  const [error, setError] = useState(false);
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    ("")
  );

  
    
   
   
  
  // HndelClick function pour reservation
  const id = props.id;
  const handelClickResirve = async (day, id, promo_id) => {
    console.log(id);
    console.log( promo_id)
try{
  await reservationService.addNew(day, id, promo_id);
}catch(error){
  setError(error)
}
    
  };
  console.log(selectedDate)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <TextField
          className="input"
          label="promo id"
          onChange={(e) => SetPromoId(e.target.value)}
        />
        <br />

        <TextField
          className="input"
          label="Mois/Jour/Anne"
          onChange={(e) =>   setSelectedDate(e.target.value)}
        />
        <br />
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Jour de reservation"
          value={selectedDate}
          onChange={() => handleDateChange(selectedDate)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        /> */}
        <Button
          variant="outlined"
          color="primary"
          onClick={(event) => handelClickResirve(selectedDate, id, prompId)}
        >
          Submit
        </Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
