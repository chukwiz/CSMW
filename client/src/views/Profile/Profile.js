import React from 'react';

import {TextField,InputLabel,FormControl} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import classes from './Profile.module.css'

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Profile = (props) => {
  const values= props.values
  console.log(values.job)
    return(
        <div className={classes.root}>
      <Grid container spacing = {2} style = {{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper} elevation = {0}>
          <div className = {classes.title}>
            <h3>Personal Information</h3>
          </div>
          <div className = {classes.content}>
          
          <TextField
          className = {classes.field}
          label = "First Name"
          disabled
          id="first-name"
          value = {values.firstName || ""}
        />
        
        <TextField
        className = {classes.field}
          disabled
          label="Last Name"
          value = {values.lastName || ""}
        />
        </div>

        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Email"
          disabled
          value={values.email || ""}
        />
        </div>

        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Job"
          disabled
          value={values.job || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Age"
          disabled
          value={values.age || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "City"
          disabled
          value={values.city || ""}
        />
        </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        style = {{marginBottom:"10px"}}
      >
        Edit 
      </Button>
          </Paper>
        </Grid>

        {/* Account Information */}

        <Grid item xs={12} md={9}>
        <Paper className={classes.paper} elevation = {0}>
          <div class = {classes.title} style = {{backgroundColor:"#e6e6e6fb"}}>
            <h3>Account Information</h3>
          </div>
          <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Investor Type"
          disabled
          value={values.investorType || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Capital"
          disabled
          value={values.capital || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Funds Type"
          disabled
          value={values.fundsType || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Bitcoin Address"
          disabled
          value={values.bitaddress || ""}
        />
        </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
        style = {{marginBottom:"10px"}}
      >
        OK 
      </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
}

export default Profile;