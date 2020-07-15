import React, { PureComponent } from "react";
import styles from "./Contact.module.scss";
import { Text } from "../../../../components/elements";
import classnames from "classnames";

import { EmailForm } from "../../../../components/templates";

type Props = {
  anchor: string,
  reference: string,
}

class Contact extends PureComponent<Props> {
  render() {
    const { anchor, reference } = this.props;
    return (
      <section ref={reference} id={anchor} className={classnames(styles.root)}>
        <div className={classnames(styles.title)}>
          <Text variant={"h2"} text={"Let's get in touch!"} />
          <EmailForm />
        </div>
      </section>
    );
  }
}

export default Contact;