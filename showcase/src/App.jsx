import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let projects = [
    {
      "S. No": "00. ",
      "Project Name": "Hello World",
      link: "https://www.google.com/",
    },
    {
      "S. No": "01. ",
      "Project Name": "Background Color Changer",
      link: "https://www.youtube.com/",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white p-10">
        <ul>
          {projects.map((project, index) => {
            return (
              <a href={`${project.link}`}>
                <li key={index} className="bg-teal-900 p-4 m-5 rounded-2xl">
                  {project["S. No"]} {project["Project Name"]}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
