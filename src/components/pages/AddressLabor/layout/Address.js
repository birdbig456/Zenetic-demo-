import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CreateIcon from '@material-ui/icons/Create';
import TextField from "@material-ui/core/TextField";
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
export default function AccountCon() {
  const classes = useStyles();
  const [headAddress, setHeadAddress] = useState({street:"",apt:"",city:"",zip:""})
  const [legalAddress, setLegalAddress] = useState({street:"",apt:"",city:"",zip:""})
  const [billAddress, setBillAddress] = useState({street:"",apt:"",city:"",zip:""})
  const [isShow, setIsShow] = useState(true)
  const [isShow2, setIsShow2] = useState(true)
  const [isShow3, setIsShow3] = useState(true)
  return (
    <div className={classes.root}>
      <div>
        <h3>ACCOUNTANT CONTACT INFORMATION</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Headquarters Address</h4>
        </Grid>
        <Grid item xs={12} sm={5}>
          {isShow && <p>
            {headAddress.street} {headAddress.apt} {headAddress.city} {headAddress.zip}
          </p>}
          {isShow===false && <p>
            <TextField
                  required
                  label="Street Address"
                  
                  onChange={(e) => {
                    setHeadAddress({ ...headAddress, street: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="Apt"
                  
                  onChange={(e) => {
                    setHeadAddress({ ...headAddress, apt: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="City"
                 
                  onChange={(e) => {
                    setHeadAddress({ ...headAddress, city: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="zip"
                 
                  onChange={(e) => {
                    setHeadAddress({ ...headAddress, zip: e.target.value });
                  }}
                />
                <hr/>
                <button onClick={()=>setIsShow(true)}>save</button>
          </p>}
        </Grid>
        <Grid item xs={12} sm={1}>
            <CreateIcon fontSize="small" style={{float:"right"}} onClick={()=>setIsShow(false)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Legal Address</h4>
        </Grid>
        <Grid item xs={12} sm={5}>
          {isShow2 && <p>
            {legalAddress.street} {legalAddress.apt} {legalAddress.city} {legalAddress.zip}
          </p>}
          {isShow2===false && <p>
            <TextField
                  required
                  label="Street Address"
                  
                  onChange={(e) => {
                    setLegalAddress({ ...legalAddress, street: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="Apt"
                  
                  onChange={(e) => {
                    setLegalAddress({ ...legalAddress, apt: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="City"
                 
                  onChange={(e) => {
                    setLegalAddress({ ...legalAddress, city: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="zip"
                 
                  onChange={(e) => {
                    setLegalAddress({ ...legalAddress, zip: e.target.value });
                  }}
                />
                <hr/>
                <button onClick={()=>setIsShow2(true)}>save</button>
          </p>}
        </Grid>
        <Grid item xs={12} sm={1}>
            <CreateIcon fontSize="small" style={{float:"right"}} onClick={()=>setIsShow2(false)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Billing Address</h4>
        </Grid>
        <Grid item xs={12} sm={5}>
          {isShow3 && <p>
            {billAddress.street} {billAddress.apt} {billAddress.city} {billAddress.zip}
          </p>}
          {isShow3===false && <p>
            <TextField
                  required
                  label="Street Address"
                  
                  onChange={(e) => {
                    setBillAddress({ ...billAddress, street: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="Apt"
                  
                  onChange={(e) => {
                    setBillAddress({ ...billAddress, apt: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="City"
                 
                  onChange={(e) => {
                    setBillAddress({ ...billAddress, city: e.target.value });
                  }}
                />
                <TextField
                  required
                  label="zip"
                 
                  onChange={(e) => {
                    setBillAddress({ ...billAddress, zip: e.target.value });
                  }}
                />
                <hr/>
                <button onClick={()=>setIsShow3(true)}>save</button>
          </p>}
        </Grid>
        <Grid item xs={12} sm={1}>
            <CreateIcon fontSize="small" style={{float:"right"}} onClick={()=>setIsShow3(false)} />
        </Grid>
      </Grid>
    </div>
  );
}
