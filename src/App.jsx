import React, { Component } from "react";
import { connect } from "react-redux";
import CreateArticle from "./components/CreateArticle";
import { Grommet, Main, Heading, Button, Box } from "grommet";
import { grommet } from "grommet/themes";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

class App extends Component {
  render() {
    let button;
    if (this.props.state.authenticated === true && this.props.state.firstPage) {
      button = (
        <Button
          label="Create Article"
          onClick={() => this.props.dispatch({ type: "SHOW_CREATE" })}
        />
      );
    } else {}

    return (
      <>
        <Grommet theme={grommet}>
          <Main fill align="center" justify="center">
            <Heading>
              NEWS STAFF LOGIN PAGE
              {this.props.state.authenticated && <LogoutButton />}
            </Heading>
            <Box
              direction="column"
              pad="medium"
              margin="medium"
              className="article"
            >
             {button}
              {this.props.state.createArticle && <CreateArticle />}
            </Box>
            {this.props.state.loginForm && <LoginForm />}
          </Main>
        </Grommet>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(App);
