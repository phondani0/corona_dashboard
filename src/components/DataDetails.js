import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
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
  }
}));

function DataDetails({ data }) {
  const classes = useStyles();
  return (
    <Box>
      <Paper>
        <div className={classes.header}>{data.country_name}</div>
        <Grid
          container
          direction="row"
          className={classes.gridBody}
          spacing={2}
        >

          <Grid
            item
            container
            direction="column"
            xs={6}
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
                  Cases
            </Grid>
                <Grid item>
                  {data.cases}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
                  {data.deaths}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
                  total_recovered
            </Grid>
                <Grid item>
                  {data.total_recovered}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
                  new_deaths
            </Grid>
                <Grid item>
                  {data.new_deaths}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={6}
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
                  new_cases
            </Grid>
                <Grid item>
                  {data.new_cases}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
                  serious_critical
            </Grid>
                <Grid item>
                  {data.serious_critical}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
                  active_cases
            </Grid>
                <Grid item>
                  {data.active_cases}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
                  Cases per 1 million
            </Grid>
                <Grid item>
                  {data.total_cases_per_1m_population}
                </Grid>
              </Grid>
              <Grid item>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
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
