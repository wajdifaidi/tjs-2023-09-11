import React, { lazy, Suspense } from 'react';

const LazyFooter = lazy(() => import('./Footer/footer.jsx'));

const Footer = props => (
  <Suspense fallback={null}>
    <LazyFooter {...props} />
  </Suspense>
);

export default Footer;
