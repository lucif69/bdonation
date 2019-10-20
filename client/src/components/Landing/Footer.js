import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer grey lighten-2'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='black-text'>Our Bio</h5>
            <p className='black-text text-lighten-4'>
              We are a team of college students working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>
          <div className='col l3 s12'>
            <h5 className='black-text'>Settings</h5>
            <ul>
              <li>
                <a className='black-text' href='#!'>
                  Link 1
                </a>
              </li>
              <li>
                <a className='black-text' href='#!'>
                  Link 2
                </a>
              </li>
              <li>
                <a className='black-text' href='#!'>
                  Link 3
                </a>
              </li>
              <li>
                <a className='black-text' href='#!'>
                  Link 4
                </a>
              </li>
            </ul>
          </div>
          <div className='col l3 s12'>
            <h5 className='black-text'>Connect</h5>
            <ul>
              <li>
                <a className='black-text' href='#!'>
                  Link 1
                </a>
              </li>
              <li>
                <a className='black-text' href='#!'>
                  Link 2
                </a>
              </li>
              <li>
                <a className='black-text' href='#!'>
                  Link 3
                </a>
              </li>
              <li>
                <a className='black-text' href='#!'>
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container brown-text'>Made by Believers</div>
      </div>
    </footer>
  );
};

export default Footer;
