import React, { PureComponent } from "react";
import styles from "./Home.module.css";
import { Text, Button } from "../../components/elements";
import classnames from "classnames";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className={classnames(styles.root)}>
        <div className={classnames(styles.title)}>
          <Text variant={"h1"} text={"Hi there, welcome!"} />
        </div>
        <div className={classnames(styles.description)}>
          <Text
            variant={"p"}
            text={
              "My name is Kevin van Helden, I’m a dutch front-end developer with a keen eye for UI/UX design."
            }
          />
          <Text
            variant={"p"}
            text={
              "Do you like the work you see on here, please feel free to contact me!"
            }
          />
        </div>

        <div className={classnames(styles.actions)}>
          <Button text={"Contact me"} variant={"secondary"} link={"/contact"} />
          <Button text={"View my work"} link={"/projects"} />
        </div>
      </main>
    );
  }
}

export default Home;
