import React, { Fragment, PureComponent } from "react";
import "./App.module.scss";
import { Header } from "./components/views";
import { Home, NoMatch } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      altHeader: false,
    };
    this.homeRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then((response) => response.json())
      .then((state) => this.setState(state));
  };

  checkPage = () => {
    const projects = this.projectsRef.current;
    const contact = this.contactRef.current;

    if (projects && contact) {
      const projectsPosition = projects.offsetTop;
      const contactPosition = contact.offsetTop;
      const yIndex = window.scrollY;
      const page = this.state.activePage;
      if (yIndex < projectsPosition && page !== "home") {
        return "home";
      }
      if (
        yIndex >= projectsPosition &&
        yIndex < contactPosition &&
        page !== "projects"
      ) {
        return "projects";
      }
      if (yIndex >= contactPosition && page !== "contact") {
        return "contact";
      }
    }
  };

  setAltHeader = () => {
    this.setState({ altHeader: true });
  };

  scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  render() {
    const { altHeader } = this.state;
    const { scrollToRef, homeRef, projectsRef, contactRef, checkPage } = this;
    const pageRefs = {
      home: homeRef,
      projects: projectsRef,
      contact: contactRef,
    };

    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Header
              pageRefs={pageRefs}
              navClickFunc={scrollToRef}
              activePage={checkPage}
              alt={altHeader}
            />
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Home pageRefs={pageRefs} />}
              />
              <Route
                component={() => <NoMatch setAltHeader={this.setAltHeader} />}
              />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
