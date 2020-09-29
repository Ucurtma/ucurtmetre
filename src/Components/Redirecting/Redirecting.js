import React from 'react';
import './Redirecting.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { parse } from 'query-string';
import { backendUrl } from '../../config';

const Redirecting = () => {
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const urlData = parse(location.search);
    if (urlData.code) {
      fetch(`${backendUrl}/oauth/callback?code=${urlData.code}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }

          history.push(`/donate-all`, {
            state: {
              redirected: true,
              redirectError: true,
            },
          });

          return Promise.reject();
        })
        .then(data => {
          localStorage.setItem('blAuth', data.token);
          history.push(`/donate-all`, {
            state: { redirected: true },
          });
        });
    } else if (urlData.state) {
      history.push(`/`, {
        state: {
          redirected: true,
          redirectError: true,
        },
      });
    } else {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="redirecting-container">Redirecting...</div>;
};

export default Redirecting;
