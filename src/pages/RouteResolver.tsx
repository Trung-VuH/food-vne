import React from 'react';
import { useParams } from 'react-router-dom';
import { ListingPage } from './ListingPage';
import { DetailPage } from './DetailPage';

export const RouteResolver = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug && slug.endsWith('.html')) {
    return <DetailPage />;
  }

  return <ListingPage />;
};
