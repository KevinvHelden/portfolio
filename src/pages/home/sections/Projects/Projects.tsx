import React, { PureComponent } from "react";
import styles from "./Projects.module.scss";
import classnames from "classnames";
import { ProjectOverview } from "../../../../components/collections";
import { ProjectView } from "../../../../components/views";
import digitasLarge from '../../../../images/projects/Large/digitasLarge.jpg';
import db from '../../../../firebase/db';

type Props = {
  anchor: string,
  reference: string,
}

type State = {
  projectIsOpen: boolean,
  projects: [{
    title: string,
    description: string,
    tags: Array<string>,
    bannerSource: string,
  }],
}

class Projects extends PureComponent<Props, State> {

  state: State = {
    projectIsOpen: false,
    projects: [{
      title: "",
      description: "",
      tags: [""],
      bannerSource: ""
    }]
  };

  componentDidMount() {
    this.getProjects();
  }

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

  getProjects = async () => {
    const projects: any = [];
    await db.collection("projects").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });
    });
    this.setState({
      projects: projects
    });
  }

  render() {
    const { anchor, reference } = this.props;
    const { openProject, closeProject } = this;
    const { projectIsOpen, projects } = this.state;
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