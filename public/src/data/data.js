export const exercises = [
  {
    id: 0, //use in JSX as key
    title: "Get started with React",
    subtitle: "",
    source: {
      name: "beta.react.js",
      source: "https://beta.reactjs.org/learn/installation",
    },
    subtasks: [
      {
        id: 0, //use in JSX as key
        title: "Get the project",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content: "Download and install the latest node LTS from",
          },
          {
            id: 1,
            type: "url",
            content: "https://nodejs.org/en/",
            name: "node.js",
          },
          {
            id: 2,
            type: "text",
            content: "Next, please clone the GitLab repo:",
          },
          { id: 3, type: "git-clone", content: "https://gitlab.hsrw.eu/np-v/exercises/app-npv.git" },
          {
            id: 4,
            type: "text",
            content: "Now, navigate to the project folder typing",
          },
          { id: 5, type: "code", content: "cd exercises_npv" },
          {
            id: 6,
            type: "text",
            content: "and install the node-modules",
          },
          { id: 7, type: "code", content: "install npm" },
          {
            id: 8,
            type: "text",
            content: "Next please, start the development build to see the exercises typing",
          },
          { id: 9, type: "code", content: "npm start" }
        ],
      },
    ],
  },
  {
    id: 1, //use in JSX as key
    title: "Introduction to Concurrency Programming",
    subtitle: "",
    source: {
      name: "Edsger W. Dijkstra",
      source: "https://www.cs.utexas.edu/users/EWD/ewd03xx/EWD310.PDF",
    },
    subtasks: [
      {
        id: 0, //use in JSX as key
        title: "Dining Philosophers: Cheesecake concurrency",
        done: true, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "This exercise is discussed in the first lecture. A summary can be found in the lecture slides.",
          },
        ],
      },
    ],
  }
];




