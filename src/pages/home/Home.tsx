import React, { PureComponent } from "react";
import styles from './Home.module.scss';
import classnames from 'classnames'
import { Landing, Projects, Contact } from './sections';

interface Props {
  pageRefs: {
    home: string,
    projects: string,
    contact: string,
  },
}

class Home extends PureComponent <Props>{
  render() {
    return (
      <main className={classnames(styles.root)}>
        <Landing reference={this.props.pageRefs.home} anchor={"#home"} />
        <Projects reference={this.props.pageRefs.projects} anchor={"#projects"} />
        <Contact reference={this.props.pageRefs.contact} anchor={"#contact"} />
      </main>
    );
  }
}

export default Home;
