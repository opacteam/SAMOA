import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Component from "./components/Component";
import Home from "./pages/Home";
const CardConfig = [
  {
    component: "Section",
    children: [
      {
        component: "img",
        src: "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        component: "body",
        children: [
          {
            component: "title",
            children: "This is a title",
          },
          {
            component: "subtitle",
            children: "This is the subtitle",
          },
          {
            component: "text",
            children:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
          {
            component: "button",
            children: "Click Me!",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Layout>
        <Home> {CardConfig.map((config) => Component(config))} </Home>
      </Layout>
    </div>
  );
}

export default App;
