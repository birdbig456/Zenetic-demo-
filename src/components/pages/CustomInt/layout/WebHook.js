import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 20,
    paddingBottom: 1,
    paddingRight: 20,
  },
}));
export default function WebHook() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>WEBHOOKS</h3>
      </div>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <h5>Shared Secret for your Webhooks </h5>
        </Grid>
        <Grid item xs={12} sm={12}>
          <h5>•••••••••••••••••••••••••••••••••••••••••••</h5>
        </Grid>
        <Grid item xs={12} sm={12}>
          <h5>Scopes Setting for your Webhooks</h5>
        </Grid>
        <Grid item xs={12} sm={12}>
          <p>Write Something</p>
        </Grid>
      </Grid>
    </div>
  );
}
