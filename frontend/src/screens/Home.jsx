import Header from "../components/homeScreen/Header";
import Categories from "../components/homeScreen/Categories";
import NewArrivals from "../components/homeScreen/NewArrivals";
import '../components/homeScreen/homeScreen.css';
import React from "react";
import RecentlyView from "../components/homeScreen/RecentlyView";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <Categories />
      <NewArrivals />
      <RecentlyView />
    </div>
  )
}

export default Home