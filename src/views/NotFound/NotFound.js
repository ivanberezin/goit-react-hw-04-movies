import React from 'react';
import { Link } from 'react-router-dom';

import imagePath from '../../assets/pusheen.jpg';
import styles from './NotFound.module.css';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.status}>404</h1>
    <img src={imagePath} alt="cat detective" width="320" />
    <p>
      Упс, кажется Вы потерялись. Вот <Link to="/">ccылка</Link> на главную страницу.
    </p>
  </div>
);

export default NotFound;