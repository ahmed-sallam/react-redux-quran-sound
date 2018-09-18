import React, { Component } from "react";
import { connect } from "react-redux";
import { getReciters } from "./actions/recitersAction";
import { getSurah } from "./actions/surahAction";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Cat from "./containers/Cat";
import NotFound from "./containers/NotFound";
import styled from "styled-components";
import AudioPlayer from "./components/AudioPlayed";

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
  text-shadow: 1px 1px 2px #fff, 0 0 25px blue, 0 0 5px blue;
`;
const Container = styled.div`
  width: 90%;
  max-width: 550px;
  margin: 0 auto;
  background: #fff;
  height: calc(100vh - 150px);
  border-radius: 0.2rem;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  color: #757575;
  overflow: auto;
`;

class App extends Component {
  componentDidMount() {
    axios.get("https://mp3quran.net/api/_english.json").then(res => {
      this.props.dispatch(getReciters(res.data.reciters));
    });
    axios.get("http://mp3quran.net/api/_english_sura.json").then(res => {
      this.props.dispatch(getSurah(res.data.Suras_Name));
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header>Quran Sound</Header>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:cat" component={Cat} />
              <Route path="/:cat/:id" component={Cat} />
              <Route component={NotFound} />
            </Switch>
          </Container>
          <AudioPlayer source={this.props.player} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
