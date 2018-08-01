import React from 'react';
import Link from 'next/link';

const NavBar = () => (
  <nav>
    <div className="left">
      <Link href="/">
        <a>Gingerbread</a>
      </Link>
    </div>
    <div className="center" />
    <div className="right">
      Powered by Giphy
    </div>
    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
        padding: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #eaeaea;
      }
      nav a {
        transition: color 0.2s ease;
      }
      nav .left a {
        color: #222;
        font-size: 18px;
        font-weight: 500;
      }
      nav .right a {
        color: #666;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
      }
      nav div a:hover {
        color: #000;
      }
      nav .center {
        flex: 1;
      }
      nav .right a:not(:last-child) {
        margin-right: 15px;
      }
    `}</style>
  </nav>
);

export default NavBar;
