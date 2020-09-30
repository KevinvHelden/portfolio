import React, { PureComponent } from "react";
import styles from "./Projects.module.scss";
import classnames from "classnames";
import { ProjectOverview } from "../../../../components/collections";
import { ProjectView } from "../../../../components/views";
import db from '../../../../firebase/db';
import { getUrl } from '../../../../firebase/helpers';

type Props = {
  anchor: string,
  reference: string,
}

type State = {
  projectIsOpen: boolean,
  projectId: number,
  projectViewData: any,
  projectViewBanner: string,
  projectViewParagraphs: any,
  allProjectIndexes: any,
}

class Projects extends PureComponent<Props, State> {

  state: State = {
    projectIsOpen: false,
    projectId: 0,
    projectViewData: {
      title: "",
      skills_used: [],
      subtitle: "",
      summary: "",
      year: "",
      index: 0,
    },
    projectViewBanner: "",
    projectViewParagraphs: [],
    allProjectIndexes: [],
  };

  openProject = (id: number) => {
    this.retrieveData(id);
    this.setState({
      projectIsOpen: true,
      projectId: id
    })
  };

  closeProject = () => {
    this.setState({
      projectIsOpen: false,
    })
  }

  storeProjectIndexes = (indexes: number[]) => {
    const { allProjectIndexes } = this.state;
    if (allProjectIndexes.length == 0) {
      this.setState({
        allProjectIndexes: indexes
      })
    }
  }

  storeBanner = (folder: string, image: string) => {
    getUrl(folder, image).then((src: any) => this.setState({
      projectViewBanner: src
    }
    ));
  }

  retrieveParagraphs = () => {
    const { projectId } = this.state;
    const index: number = projectId;
    const paragraphs: any[] = [];

    db.collection("projectOverviews").where("index", "==", index).get().then((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        db.collection(`projectOverviews/${doc.id}/paragraphs`).get().then((querySnapshot: any) => {
          querySnapshot.forEach((doc: any) => {
            paragraphs.push(doc.data())
          })
          this.setState({
            projectViewParagraphs: paragraphs
          })
        })
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  retrieveData = (id: number) => {
    const { projectId } = this.state;
    const index = id;
    let items: any = {};
    if (projectId !== id) {
      this.setState({
        projectId: id
      });
      db.collection("projectOverviews").where("index", "==", index)
        .get()
        .then((querySnapshot: any) => {
          items = querySnapshot.docs[0].data();
          this.setState({
            projectViewData: items,
          });
          this.storeBanner("projectViewBanners", this.state.projectViewData.banner);
          this.retrieveParagraphs();
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }
  }

  render() {
    const { anchor, reference } = this.props;
    const { openProject, closeProject, storeProjectIndexes } = this;
    const { projectIsOpen, projectViewData, projectViewBanner, projectViewParagraphs, allProjectIndexes } = this.state;

    return (
      <section ref={reference} id={anchor} className={classnames(styles.root)}>
        <ProjectOverview projectFunc={openProject} loadFunc={storeProjectIndexes} />
        <ProjectView data={projectViewData} paragraphs={projectViewParagraphs} banner={projectViewBanner} allIndexes={allProjectIndexes} isOpen={projectIsOpen} closeProject={closeProject} />
      </section>
    );
  }
}

export default Projects;