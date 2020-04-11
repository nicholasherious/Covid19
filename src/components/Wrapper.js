import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import MainContent from './MainContent';
import './Container.css';
import { Container, Divider } from 'semantic-ui-react';
import { fetchData } from '../api/Api';
import Footer from './Footer';
import HeadBar from './HeadBar'


function Wrapper() {
  const [data, setData] = useState()

useEffect(() => {
  const dataFetcher = async () => {
    const data = await fetchData();
    setData(data)
  }
  dataFetcher();
}, [])
// console.log(data)
  return (
    
    <Container>
      <HeadBar />
      <TopBar data={data} />
      <Divider horizontal>Stats Updated Daily</Divider>
      <MainContent />
      <Footer />
    </Container>
  );
}

export default Wrapper;
