import React, { Fragment, PureComponent } from "react";
import "./App.module.scss";
import { Header } from "./components/views";
import { Home, NoMatch } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import db from './firebase/db';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
      altHeader: false,
    };
    this.homeRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkPage);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkPage);
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  checkPage = () => {
    const projectsPosition = this.projectsRef.current.offsetTop;
    const contactPosition = this.contactRef.current.offsetTop;
    const yIndex = window.scrollY;
    const page = this.state.activePage;
    if (yIndex < projectsPosition && page !== "home") {
      this.setState({ activePage: "home" });
    }
    if (
      yIndex >= projectsPosition &&
      yIndex < contactPosition &&
      page !== "projects"
    ) {
      this.setState({ activePage: "projects" });
    }
    if (yIndex >= contactPosition && page !== "contact") {
      this.setState({ activePage: "contact" });
    }
  };

  setAltHeader = () => {
    this.setState({ altHeader: true });
  };

  scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  render() {
    const { activePage, altHeader } = this.state;
    const { scrollToRef, homeRef, projectsRef, contactRef } = this;
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
              activePage={activePage}
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
