import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GeneralTax from "./layout/GeneralTax";
import AccountCon from "./layout/AccountCon";

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

export default function TaxInfo() {
  const classes = useStyles();

  return (
    <div>
      <GeneralTax />
      <br />
      <AccountCon />
    </div>
  );
}
