import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ManagerPer from "./layout/ManagerPer";
import IndividualPer from "./layout/IndividualPer";
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

export default function PermissionPage() {
  const classes = useStyles();

  return (
    <div>
      <ManagerPer/>
      <br/>
      <IndividualPer/>
    </div>
  );
}
