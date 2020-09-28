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
          <div className={classnames(styles.staticContactInfo)}>
            <div>
              <Text text={"Email"} strong />
              <Text link={"mailto:k.v.helden96@hotmail.com"} text={"k.v.helden96@hotmail.com"} />
            </div>
            <div>
              <Text text={"Phone"} strong />
              <Text link={"tel:+31611031374"} text={"+31 6 1103 1374"} />
            </div>
          </div>
          <EmailForm />
          <div className={classnames(styles.socialContact)}>
            <Text variant={"h5"} text={"Contact me via social media"} />
            <Text link={"https://www.linkedin.com/in/kevin-van-helden-671726141/"} text={"LinkedIn"} />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;