import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='blog__container-article'>
      <div className='blog__container-article__image'>
        <img src={imgUrl} alt='blog image' />
      </div>

      <div className='blog__container-article__content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
