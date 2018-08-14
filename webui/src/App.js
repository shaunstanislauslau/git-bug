import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Route, Switch, withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import BugPage from './BugPage'
import ListPage from './ListPage'

const styles = theme => ({
  appTitle: {
    color: 'white',
    textDecoration: 'none'
  }
})

const App = ({location, classes}) => (
  <React.Fragment>
    <CssBaseline/>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link to="/" className={classes.appTitle}>
          <Typography variant="title" color="inherit">
            git-bug webui
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
    <Switch>
      <Route path="/" exact component={ListPage}/>
      <Route path="/bug/:id" exact component={BugPage}/>
    </Switch>
  </React.Fragment>
)

export default withStyles(styles)(withRouter(App))
