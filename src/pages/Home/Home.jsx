import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidget"></div>
        
        </div>
    )
}

export default Home
