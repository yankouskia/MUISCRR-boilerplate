import React from 'react';
import AppLayout from '../layout/App';
import ContentLayout from '../layout/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Feedback extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <Header />
        <ContentLayout>Feedback page</ContentLayout>
        <Footer />
      </AppLayout>
    );
  }
}
