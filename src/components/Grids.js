import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: { margin: "0 auto", maxWidth: 1000, marginTop: 20 },
  paper: {
    padding: theme.spacing(12),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Gri() {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      const reponse = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      let data = await reponse.json();
      delete data.results[0].source;
      console.log(data.results[0]);
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((val) => {
          return (
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper} elevation={3}>
                {123}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Gri;
