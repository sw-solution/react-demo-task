import React from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';

export default function Home({ data }) {
  return (
    <div className="homepage-panel container">
      <Header headerData={data.header} />
      <Body bodyData={data.body} />
      <Footer footerData={data.footer} />
    </div>
  )
}