import { useEffect, useState } from "react";
import CoursesContext from "./context/CoursesContext.js";
import { useSearchParams } from "react-router-dom";
import Router from "./routes/router.js";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    axios.get("http://localhost:3004/courses")
      // .then((response) => response.json())
      .then((data) => {
        console.log("first");
        console.log(data.data);
        setCourses(data.data);
        setSearch({});
      })
      .catch(error =>console.log("Tekaaa") );
  }, []);
  return (
    <CoursesContext.Provider value={courses}>
      <Router />
    </CoursesContext.Provider>
  );
}

export default App;
