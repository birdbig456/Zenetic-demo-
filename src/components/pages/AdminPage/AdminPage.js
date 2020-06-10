import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PrimaryAdmin from './layout/PrimaryAdmin'
import AdditionaliAdmin from './layout/AdditionalAdmin'
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

export default function AdminPage() {
  const classes = useStyles();

  return (
    <div>
        <PrimaryAdmin/>
        <br/>
        <AdditionaliAdmin/>
    </div>
  );
}
