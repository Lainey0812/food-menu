import React from 'react';
import { IRouteComponentProps } from 'umi';
import BottomTab from '../components/TabBar/index';
import styles from './index.less';

const customLayout = (props: IRouteComponentProps) => {
  return (
    <div className={styles.container}>
      {props.children}
      <div className={styles.footer}>
        <BottomTab />
      </div>
    </div>
  );
};

export default customLayout;
