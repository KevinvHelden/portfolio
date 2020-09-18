import React, { PureComponent } from "react";
import styles from './Home.module.scss';
import classnames from 'classnames'
import { Landing, Projects, Contact } from './sections';

type Props = {
  pageRefs: {
    home: string,
    projects: string,
    contact: string,
  },
}

class Home extends PureComponent <Props>{
  render() {
    const { home, projects, contact } = this.props.pageRefs;
    return (
      <main className={classnames(styles.root)}>
        <Landing reference={home} anchor={"#home"} />
        <Projects reference={projects} anchor={"#projects"} />
        <Contact reference={contact} anchor={"#contact"} />
      </main>
    );
  }
}

export default Home;
