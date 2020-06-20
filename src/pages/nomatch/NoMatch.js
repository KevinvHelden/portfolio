import React, { PureComponent } from "react";
import styles from "./NoMatch.module.css";
import classnames from "classnames";

import { Text } from "../../components/elements";

class NoMatch extends PureComponent {
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
        <Text variant={"h1"} text={"404"} extraLarge />
        <Text variant={"h2"} text={"I’m sorry, I couldn’t find your page."} />
        <Text variant={"h2"} text={"This link will take you home."} link={"/"} />
      </main>
    );
  }
}

export default NoMatch;
