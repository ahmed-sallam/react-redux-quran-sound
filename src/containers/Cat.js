import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NotFound from "./NotFound";
import { setCurrentSource } from "../actions/playerAction";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #757575;
`;
const Item = styled.h2`
  padding: 1rem;
  border-bottom: 1px dotted #e0e0e0;
  border-right: 1px dotted #e0e0e0;
  width: 100%;
  ${props =>
    props &&
    css`
      &:hover {
        background: #eeeeee;
      }
    `};
`;

class Cat extends React.Component {
  renderReciters = () =>
    this.props.reciters.map(e => {
      return (
        <Link
          to={`/reciters/${e.id}`}
          key={e.id}
          style={{ width: "50%", overflow: "hidden" }}
        >
          <Item>{e.name}</Item>
        </Link>
      );
    });

  // render cat by surah
  renderSurah = () => {};

  renderRewaya = () => {};

  // render all reciter suras
  renderItems = array =>
    array.map(e => {
      let suras = e.suras.split(",").map(x => parseInt(x));
      let output = [];
      output = this.props.surah
        .filter(i => suras.includes(Number(i.id)))
        .map(item => (
          <div
            key={e.id + "" + item.id}
            style={{ width: "50%", overflow: "hidden" }}
            onClick={event => {
              event.preventDefault();
              this.props.dispatch(
                setCurrentSource(
                  e.Server +
                    "/" +
                    (item.id >= 100
                      ? item.id
                      : item.id >= 10
                        ? "0" + item.id
                        : "00" + item.id) +
                    ".mp3"
                )
              );
            }}
          >
            <Item>{item.name}</Item>
          </div>
        ));
      return output;
    });

  d = () => {
    switch (this.props.match.params.cat) {
      case "reciters":
        if (this.props.match.params.id === undefined) {
          return this.renderReciters();
        } else {
          let filteredItem = this.props.reciters.filter(
            e => e.id === this.props.match.params.id
          );
          return this.renderItems(filteredItem);
        }
      default:
        return <NotFound />;
    }
  };

  render() {
    return <Container>{this.d()}</Container>;
  }
}

Cat.propTypes = {
  reciters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  reciters: state.reciters,
  surah: state.surah
});
export default connect(mapStateToProps)(Cat);
