import React, { PureComponent } from "react";
import styles from "./ProjectOverview.module.scss";
import classnames from "classnames";
import { Project } from "../../elements";
import db from '../../../firebase/db';

type Props = {
  projectFunc: (id: number) => void,
  loadFunc: (indexes: number[]) => void,
}

type State = {
  projects: [{
    title: string,
    description: string,
    tags: Array<string>,
    bannerSource: string,
  }],
}

class ProjectOverview extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      projects: [{
        title: "",
        description: "",
        tags: [""],
        bannerSource: ""
      }]
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  isOdd = (num: number) => {
    return num % 2;
  }

  compare = (a: any, b: any) => {
    if (a.index < b.index) {
      return -1;
    }
    if (a.index > b.index) {
      return 1;
    }
    return 0;
  }

  sortByIndex = (items: any) => {
    return items.sort(this.compare);
  }

  formatCards = () => {
    const { projectFunc } = this.props;
    const { sortByIndex } = this;
    const { projects } = this.state;
    const sortedProjects = sortByIndex(projects);
    if (projects[0].title) {
      return sortedProjects.map((project: any, index: number) => (
        <Project
          data={project}
          alignment={this.isOdd(index) ? "left" : "right"}
          clickFunc={projectFunc}
          key={index}
        />
      ))
    };
  };

  getProjects = async () => {
    const { loadFunc } = this.props;
    const projects: any = [];
    const projectIndexes: number[] = [];
    await db.collection("projects").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
        projectIndexes.push(doc.data().index);
      });
    });
    this.setState({
      projects: projects
    });
    loadFunc(projectIndexes);
  }

  render() {
    const { formatCards } = this;
    return <div className={classnames(styles.root)}>{formatCards()}</div>;
  }
}

export default ProjectOverview;
