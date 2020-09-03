import React, { PureComponent } from "react";
import styles from "./NoMatch.module.scss";
import classnames from "classnames";
import { Text } from "../../components/elements";

type Props = {
  setAltHeader: () => void,
}

class NoMatch extends PureComponent <Props> {
  constructor(props: Props) {
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
        <Text variant={"p"} text={"I’m sorry, I couldn’t find your page."} />
        <Text variant={"p"} text={"This link will take you home."} link={"/"} />
      </main>
    );
  }
}

export default NoMatch;
