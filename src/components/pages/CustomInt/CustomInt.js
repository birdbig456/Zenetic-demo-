import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RestApi from "./layout/RestApi";
import WebHook from "./layout/WebHook";
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

export default function CustomInt() {
  const classes = useStyles();

  return (
    <div>
      <RestApi/>
      <br/>
      <WebHook/>
    </div>
  );
}
