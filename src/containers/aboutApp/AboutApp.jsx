import React from 'react';
import { Feature } from '../../components';
import './aboutApp.css';

const AboutApp = () => {
  return (
    <div className='about__app section__margin' id='about-app'>
      <div className='about__app-feature'>
        <Feature
          title='Who we are'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </div>
      <div className='about__app-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='about__app-container'>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
        />
        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Feature
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </div>
    </div>
  );
};

export default AboutApp;
