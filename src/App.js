import React, { Fragment, PureComponent } from "react";
import "./App.module.scss";
import { Header } from "./components/views";
import { AfstudeerPortfolio, Home, NoMatch } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

  checkPage = () => {
    const yIndex = window.scrollY;
    const windowHeight = window.innerHeight;
    const page = this.state.activePage;
    if (yIndex <= windowHeight - 1 && page !== "home") {
      this.setState({ activePage: "home" });
    }
    if (
      yIndex >= windowHeight &&
      yIndex < windowHeight * 2 &&
      page !== "projects"
    ) {
      this.setState({ activePage: "projects" });
    }
    if (yIndex >= windowHeight * 2 && page !== "contact") {
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
                exact
                path="/afstudeerportfolio"
                component={() => (
                  <AfstudeerPortfolio setAltHeader={this.setAltHeader} />
                )}
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
