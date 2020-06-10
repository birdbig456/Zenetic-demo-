import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CompanyOver from "../pages/CompanyView/CompanyOver";
import TaxInfo from "../pages/Taxinfo/TaxInfo";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddressLabor from "../pages/AddressLabor/AddressLabor";
import ProjectPage from "../pages/Project/ProjectPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import PermissionPage from "../pages/PermissionPage/PermissionPage";
import CustomInt from "../pages/CustomInt/CustomInt";
import SecurityPage from "../pages/SecurityPage/SecuryPage"
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
    marginLeft: 60,
    marginTop: 20,
    textAlign: "center",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function NavigatorTab() {
  const classes = useStyles();
  const [mode, setMode] = React.useState(1);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid></Grid>
        <Grid item xs={12} sm={4} style={{ textAlign: "left" }}>
          <div className={classes.Topic}>
            <ListItem
              button
              onClick={() => {
                setMode(1);
              }}
            >
              <h3>Company Overview</h3>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setMode(2);
              }}
            >
              <h3>Tax Info</h3>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setMode(3);
              }}
            >
              <h3>Address & Laber Groups</h3>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setMode(4);
              }}
            >
              <h3>Project</h3>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setMode(5);
              }}
            >
              <h3>Administrators</h3>
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setMode(6);
              }}
            >
              <h3>Permissions</h3>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setMode(7);
              }}
            >
              <h3>Custom Integrations</h3>
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setMode(8);
              }}
            >
              <h3>Security Setiing</h3>
            </ListItem>
          </div>
        </Grid>
        <Grid item xs={12} sm={7}>
          {mode === 1 && (
            <div>
              <CompanyOver />
            </div>
          )}
          {mode === 2 && (
            <div>
              <TaxInfo />
            </div>
          )}
          {mode === 3 && (
            <div>
              <AddressLabor />
            </div>
          )}
           {mode === 4 && (
            <div>
              <ProjectPage />
            </div>
          )}
          {mode === 5 && (
            <div>
              <AdminPage/>
            </div>
          )}
          {mode === 6 && (
            <div>
              <PermissionPage/>
            </div>
          )}
          {mode === 7 && (
            <div>
              <CustomInt/>
            </div>
          )}
          {mode === 8 && (
            <div>
              <SecurityPage/>
            </div>
          )}
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid>
    </div>
  );
}
