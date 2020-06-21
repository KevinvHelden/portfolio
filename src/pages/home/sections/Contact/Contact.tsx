import React, { PureComponent } from "react";
import styles from "./Contact.module.css";
import { Text } from "../../../../components/elements";
import classnames from "classnames";

import { EmailForm } from "../../../../components/templates";

type Props = {
  anchor: string,
}

class Contact extends PureComponent <Props> {
  render() {
    const { anchor } = this.props;
    return (
      <section id={anchor} className={classnames(styles.root)}>
        <div className={classnames(styles.title)}>
          <Text variant={"h2"} text={"Contact"} />
          <EmailForm />
        </div>
      </section>
    );
  }
}

export default Contact;