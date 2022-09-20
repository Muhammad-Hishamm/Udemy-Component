import React from "react";
import CoursesSection from "../components/HomePage/coursesSection/CoursesSection";
import NavBar from "../components/NavBar";
import AlarmCard from "../components/HomePage/Alarm/alarmCard";
const HomePage = (props) => {
  return (
    <>
      <NavBar />
      <AlarmCard />
      <CoursesSection />
    </>
  );
};
export default HomePage;
