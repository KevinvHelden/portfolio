import React, { PureComponent } from "react";
import {withRouter} from 'react-router-dom';
import styles from "./AfstudeerPortfolio.module.css";
import classnames from "classnames";

import { Intro, Onderzoeksvraag, Analyse } from "./sections";

class AfstudeerPortfolio extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setAltHeader();
  }

  render() {
    return (
      <main className={classnames(styles.root)}>
        <Intro anchor={"intro"} />
        <Onderzoeksvraag anchor={"onderzoeksvraag"} />
        <Analyse anchor={"analyse"} />
      </main>
    );
  }
}

export default withRouter(AfstudeerPortfolio);
