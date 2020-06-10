import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 20,
    paddingBottom: 1,
    paddingRight: 20,
  },
  PopHead: {
    fontSize: 15,
    paddingTop: 1,
    paddingBottom: 1,
    marginTop:10,
    marginLeft:5
  },
  InputPop: {
    width: "60%",
    paddingLeft: 10,
    display: "inline-block",
    paddingTop:5,
    paddingBottom:5,
    textAlign:"left",  
  },
}));
export default function Contactinfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>CONTACT INFORMATION</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Primary Admin</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>scgpongsakorn@demo.scg.co.th</h4>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>HR Contact</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Popup
            trigger={
              <Button color="secondary" className="Button">
                <AddCircleIcon color="secondary" />
                <h5>Open Modal </h5>
              </Button>
            }
            modal
          >
            {(close) => (
              <div className="modal">
                <div className="header" className={classes.PopHead}>
                  {" "}
                  CHANGE SCG'S HR CONTACT{" "}
                </div>
                <hr />
                <div className="content">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} className={classes.PopHead}>
                    <label>First Name :</label>
                    </Grid>
                    <Grid item xs={12} sm={7} className={classes.PositionInput}>
                      
                    <input className={classes.InputPop} type="text" placeholder="Your first name.."/>
                    </Grid>
                  </Grid>
                </div>
                <div className="actions">
                  <Popup
                    trigger={
                      <Button color="secondary" className="Button">
                        {" "}
                        Submit{" "}
                      </Button>
                    }
                    position="top center"
                    closeOnDocumentClick
                  >
                    <span>send data success!!</span>
                  </Popup>
                  <Button
                    color="secondary"
                    className="Button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    CLOSE
                  </Button>
                </div>
              </div>
            )}
          </Popup>
        </Grid>
      </Grid>
    </div>
  );
}
