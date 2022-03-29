import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

const Photos = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15';

  const { results, loading, error } = useFetch(url);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error) return <p>{error}</p>;

  const photoList = results.map((photo) => (
    <li key={photo.id}>
      <Link to={`/photo-detail/${photo.id}`}>
        <p>{photo.title}</p>
      </Link>
    </li>
  ));

  return <section>{photoList}</section>;
};

export default Photos;
