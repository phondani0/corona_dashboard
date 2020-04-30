import React, { useState, useEffect } from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#161b31', 0.8),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#0023fb',
  },
})(LinearProgress);

const DeathsProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#e31b2c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#e31b2c',
  },
})(LinearProgress);

const RecoveredProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#40a776', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#40a776',
  },
})(LinearProgress);

const ActiveProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#f97739', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#f97739',
  },
})(LinearProgress);

const NewProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#f97739', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#f97739',
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    marginTop: 4,
    marginBottom: 4,
  },
  header: {
    paddingTop: 10,
    fontWeight: "bold"
  },
  gridBody: {
    fontSize: 14,
    padding: 10
  },
  bar_recovered: {
    background: "linear-gradient(to right, #430089, #82ffa1)"
  }
}));

function DataDetails({ data }) {
  const classes = useStyles();

  const [progressData, setProgressData] = useState({});

  useEffect(() => {
    const percentOfxPerTotalCases = (x, totalCases = data.cases) => {
      console.log(x, totalCases);
      return Math.ceil(parseInt((x || "").replace(/,/g, '')) / parseInt((totalCases || "").replace(/,/g, '')) * 100) || 0;
    };

    const progressData = {
      'totalCases': 100,
      'deaths': percentOfxPerTotalCases(data.deaths),
      'recovered': percentOfxPerTotalCases(data.total_recovered),
      'newDeaths': percentOfxPerTotalCases(data.new_deaths),
      'newCases': percentOfxPerTotalCases(data.new_cases),
      'seriousCritical': percentOfxPerTotalCases(data.serious_critical),
      'activeCases': percentOfxPerTotalCases(data.active_cases),
      'totalCasesPerM': percentOfxPerTotalCases(data.total_cases_per_1m_population)
    }

    setProgressData(progressData);

    console.log(progressData);
  }, [data]);


  return (
    <Box>
      <Paper>
        <div className={classes.header}>{data.country_name}</div>
        <Grid
          container
          direction="row"
          className={classes.gridBody}
          spacing={2}
          justify="space-evenly"
        >

          <Grid
            item
            container
            direction="column"
            xs={6}
            spacing={1}
          >
            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  Total cases
            </Grid>
                <Grid item>
                  {data.cases || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.totalCases - 2}
                />
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  Deaths
                  </Grid>
                <Grid item>
                  {data.deaths || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <DeathsProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.deaths}
                />
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  Recovered
            </Grid>
                <Grid item>
                  {data.total_recovered || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <RecoveredProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.recovered}
                />
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  New deaths
            </Grid>
                <Grid item>
                  {data.new_deaths || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <DeathsProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.newDeaths}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={6}
            spacing={1}
          >
            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  New cases
            </Grid>
                <Grid item>
                  {data.new_cases || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <NewProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.newCases}
                />
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  Serious critical
            </Grid>
                <Grid item>
                  {data.serious_critical || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <DeathsProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.seriousCritical}
                />
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item >
                  Active cases
                </Grid>
                <Grid item>
                  {data.active_cases || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <ActiveProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.activeCases}
                />
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid
                item
                xs={12}
                sm
                container
                justify="space-between"
              >
                <Grid item>
                  Cases per 1 M
                </Grid>
                <Grid item>
                  {data.total_cases_per_1m_population || "NA"}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={progressData.totalCasesPerM}
                />
              </Grid>
            </Grid>

          </Grid>

        </Grid>
      </Paper>
    </Box>
  )
}

export default DataDetails;
