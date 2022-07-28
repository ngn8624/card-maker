import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Alex',
      company: 'WGS',
      theme: 'light',
      title: 'Sofeware Engineer',
      email: 'kwangjin.yoon@wgslabs.com',
      message: 'let get it',
      fileName: 'alex',
      fileURL: 'alex.png',
    },
    {
      id: '2',
      name: 'Damon',
      company: 'WGS',
      theme: 'colorful',
      title: 'Sofeware Engineer',
      email: 'damon@wgslabs.com',
      message: 'Can you do that?',
      fileName: 'damon',
      fileURL: null,
    },
    {
      id: '3',
      name: 'brad',
      company: 'WGS',
      theme: 'dark',
      title: 'Sofeware Engineer',
      email: 'brad@wgslabs.com',
      message: 'You got it',
      fileName: 'brad',
      fileURL: null,
    }
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
        <div className={styles.container}>
          <Editor cards={cards} addCard={addCard}/>
          <Preview cards={cards} />
        </div>
      <Footer />
    </section>
  );
};

export default Maker;
