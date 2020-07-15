import React, { PureComponent } from "react";
import styles from "./Projects.module.scss";
import classnames from "classnames";

import { ProjectOverview } from "../../../../components/collections";
import { ProjectView } from "../../../../components/views";
import digitasLarge from '../../../../images/projects/Large/digitasLarge.jpg';

import projects from "./fixtures/projects";

type Props = {
  anchor: string,
  reference: string,
}

type State = {
  projectIsOpen: boolean,
}

const intialState = Object.freeze({ projectIsOpen: false, })

class Projects extends PureComponent<Props, State> {

  readonly state = intialState


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
    const { anchor, reference } = this.props;
    const { openProject, closeProject } = this;
    const { projectIsOpen } = this.state;
    const projectData = { title: "3rd Year internship", subtitle: "Digitas", background: digitasLarge, content: "" };

    return (
      <section ref={reference} id={anchor} className={classnames(styles.root)}>
        <ProjectOverview projects={projects} projectFunc={openProject} />
        <ProjectView data={projectData} isOpen={projectIsOpen} closeProject={closeProject} />
      </section>
    );
  }
}

export default Projects;