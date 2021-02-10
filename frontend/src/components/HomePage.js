import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Info from "./Info";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  async componentDidMount() {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          roomCode: data.code,
        });
      });
  }

  renderHomePage() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Stand on Stage 
          </Typography>
          <Typography variant="h4" compact="h4">
            Where you share music with you colligues
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" spacing={2} >
          <ButtonGroup disableElevation variant="contained" color="primary" spacing={3}>
            <Button   size = "large" color="primary" to="/join" component={Link}   spacing={3} >
              Join a Stage
            </Button>
            <Button color="default" size = "large" to="/info" component={Link}  px ={ 2 }>
                who it works
            </Button>
            <Button color="secondary" to="/create" component={Link} size = "large"  spacing={3}>
              Create a Stage
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
  clearRoomCode() {
    this.setState({
      roomCode: null,
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.state.roomCode ? (
                <Redirect to={`/room/${this.state.roomCode}`} />
              ) : (
                this.renderHomePage()
              );
            }}
          />
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/info" component={Info} />
          <Route path="/create" component={CreateRoomPage} />
          <Route
            path="/room/:roomCode"
            render={(props) => {
              return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}