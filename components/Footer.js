import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer">
        <div className="copy">
          &copy; 2018 Gingerbread Inc.
        </div>
      </div>
    </div>
    <style jsx>{`
      footer {
        margin-top: 15px;
        border-top: 1px solid #eaeaea;
        background-color: #fafafa;
      }
      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60px;
      }
      .copy {
        color: #222;
        font-size: 14px;
      }
    `}</style>
  </footer>
);

export default Footer;
