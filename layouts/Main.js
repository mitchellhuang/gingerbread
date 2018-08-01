import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import Head from '../components/Head';
import Footer from '../components/Footer';

const GlobalStyles = ({
  children,
}) => (
  <Fragment>
    {children}
    <style jsx global>{`
      body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,
        "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
      }
      a {
        color: #6c63ff;
        text-decoration: none;
      }
    `}</style>
  </Fragment>
);

const Main = ({
  title,
  children,
}) => (
  <GlobalStyles>
    <Head title={title} />
    <div className="site">
      <NavBar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
    <style jsx>{`
      .site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }
      .content {
        flex: 1;
      }
    `}</style>
  </GlobalStyles>
);

export default Main;
