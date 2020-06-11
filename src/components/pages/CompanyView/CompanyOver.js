import React from "react";
import Header from "../../layouts/Header";
import Person from "../../layouts/Person";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import General from "./layout/General";
import ContactInfo from "./layout/ContactInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  Topic: {
    margin: "auto",
    marginLeft: 80,
    marginTop: 20,
  },
}));

export default function CompanyOver() {
  const classes = useStyles();

  return (
    <div>
      <General />
      <br/>
        <ContactInfo />
      
    </div>
  );
}
