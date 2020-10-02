import React, { PureComponent } from "react";
import styles from './Loading.module.scss';
import classnames from 'classnames'

type Props = {
  isLoading: boolean,
}

type State = {
  isLoading: boolean,
}

class Loading extends PureComponent<Props, State>{
  render() {
    const { isLoading } = this.state;
    return (
      <main className={classnames(styles.root, { [styles.isLoading]: isLoading })}>
        <p>Loading</p>
      </main>
    );
  }
}

export default Loading;
