import React from 'react'
import MapChart from './MapChart'
import Sidebar from './SideMenu'
import  BarChart  from './ChartMenu'
const Home = () => {
  // home section 
  return (
    <div>
      <Sidebar />
      <MapChart />
      <BarChart />
    </div>
  );
}

export default Home
