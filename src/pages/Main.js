import React from 'react';
import AppLayout from '../layout/App';
import ContentLayout from '../layout/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Main extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <Header />
        <ContentLayout>Main page</ContentLayout>
        <Footer />
      </AppLayout>
    );
  }
}
