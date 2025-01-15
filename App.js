const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World From React!"
);

const root = ReactDOM.createRoot(document.getElementById("root2"));

root.render(heading);
