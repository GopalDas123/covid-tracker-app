import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));
const useStylesTypo = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classTypo = useStylesTypo();

  const [globalData, setGlobalData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    async function fetchGlobalData() {
      setDataLoading(true);
      const apiResp = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      const apiRespJson = await apiResp.json();
      setGlobalData(apiRespJson);
      setDataLoading(false);
    }
    fetchGlobalData();
  }, []);
  const loading = "Loading";
  if (dataLoading) {
    return (
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classTypo.root}>
            <Typography
              variant="h4"
              style={{ color: "black", fontWeight: "bold" }}
              gutterBottom
            >
              {loading}{" "}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>GLOBAL</b>
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classTypo.root}>
            <Typography
              variant="h4"
              style={{ color: "orange", fontWeight: "bold" }}
              gutterBottom
            >
              {loading}{" "}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              ACTIVE
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classTypo.root}>
            <Typography
              variant="h4"
              style={{ color: "green", fontWeight: "bold" }}
              gutterBottom
            >
              {loading}{" "}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              RECOVERED
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classTypo.root}>
            <Typography
              variant="h4"
              style={{ color: "red", fontWeight: "bold" }}
              gutterBottom
            >
              {loading}{" "}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              FATILITIES
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classTypo.root}>
          <Typography
            variant="h4"
            style={{ color: "black", fontWeight: "bold" }}
            gutterBottom
          >
            <NumberFormat
              value={
                globalData &&
                globalData.results &&
                globalData.results[0].total_cases
              }
              displayType={"text"}
              thousandSeparator={true}
            ></NumberFormat>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          GLOBAL
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classTypo.root}>
          <Typography
            variant="h4"
            style={{ color: "orange", fontWeight: "bold" }}
            gutterBottom
          >
              <NumberFormat
              value=
                  {globalData &&
                    globalData.results &&
                    globalData.results[0].total_unresolved +
                      globalData.results[0].total_active_cases}
                
              
              displayType={"text"}
              thousandSeparator={true}
            ></NumberFormat>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            ACTIVE
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classTypo.root}>
          <Typography
            variant="h4"
            style={{ color: "green", fontWeight: "bold" }}
            gutterBottom
          ><NumberFormat
          value={
              globalData &&
                globalData.results &&
                globalData.results[0].total_recovered
            
          }
          displayType={"text"}
          thousandSeparator={true}
        ></NumberFormat>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            RECOVERED
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classTypo.root}>
          <Typography
            variant="h4"
            style={{ color: "red", fontWeight: "bold" }}
            gutterBottom
          ><NumberFormat
          value={
              globalData &&
                globalData.results &&
                globalData.results[0].total_deaths
            
          }
          displayType={"text"}
          thousandSeparator={true}
        ></NumberFormat>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            FATILITIES
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
