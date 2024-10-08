import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Error:</strong> {error.statusText || error.message}</p>
          {error.status && <p><strong>Status Code:</strong> {error.status}</p>}
        </div>
      )}
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
