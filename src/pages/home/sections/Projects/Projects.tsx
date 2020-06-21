import React, { PureComponent } from "react";
import styles from "./Projects.module.css";
import { Text } from "../../../../components/elements";
import classnames from "classnames";

import { CardOverview } from "../../../../components/collections";
import { ProjectView } from "../../../../components/views";
import digitasLarge from '../../../../images/projects/Large/digitasLarge.jpg';

import cards from "./fixtures/cards";

interface Props {
  anchor: string,
}

interface State {
  projectIsOpen: boolean,
}

class Projects extends PureComponent<Props, State> {

  state = {
    projectIsOpen: false
  };


  openProject = () => {
    this.setState({
      projectIsOpen: true,
    })
  };

  closeProject = () => {
    this.setState({
      projectIsOpen: false,
    })
  }

  render() {
    const { anchor } = this.props;
    const { openProject, closeProject } = this;
    const { projectIsOpen } = this.state;
    const projectData = { title: "3rd Year internship", subtitle: "Digitas", background: digitasLarge, content: "" };

    return (
      <section id={anchor} className={classnames(styles.root)}>
        <div className={classnames(styles.title)}>
          <Text variant={"h2"} text={"Projects"} />
          <CardOverview cards={cards} cardFunc={openProject} />
          <ProjectView data={projectData} isOpen={projectIsOpen} closeProject={closeProject} />
        </div>
      </section>
    );
  }
}

export default Projects;