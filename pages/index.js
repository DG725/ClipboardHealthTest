import React from 'react';
// import Header from '../components/header';
import Header from '../components/Navbar';
import Footer from '../components/footer';
import Content from '../components/content';

import jobs from '../data/jobs'

const Index = ({allJobs}) => (
  <div className="bg-red-50">
    <Header/>
    <Content allJobs={allJobs}/>
    <Footer/>
  </div>
)
export async function getStaticProps() {
  //const res = await fetch(`https://clipboard-health-test.herokuapp.com/api/jobs`);
  //const data = await res.json()
  
  return {
    props:{ allJobs : { jobs: jobs } }
  };
}
export default Index
