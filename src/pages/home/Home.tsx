import React, { PureComponent } from "react";
import styles from './Home.module.scss';
import classnames from 'classnames'
import { Landing, Projects, Contact } from './sections';

class Home extends PureComponent{
  render() {
    return (
      <main className={classnames(styles.root)}>
        <Landing anchor={"#home"} />
        <Projects anchor={"#projects"} />
        <Contact anchor={"#contact"} />
      </main>
    );
  }
}

export default Home;
