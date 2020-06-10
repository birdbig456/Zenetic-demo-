import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Address from './layout/Address'
import Department from './layout/Department'
import Position from './layout/Position'
import WorkLocation from './layout/WorkLocation'
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

export default function AddressLabor() {
  const classes = useStyles();

  return (
    <div>
      <Address/>
      <br />
      <WorkLocation/>
      <br/>
      <Department/>
      <br/>
      <Position/>
    </div>
  );
}
