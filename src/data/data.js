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
          { id: 3, type: "git-clone", content: "https://gitlab.hsrw.eu/lv-mkg/exercises/app-mkg.git" },
          {
            id: 4,
            type: "text",
            content: "Now, navigate to the project folder typing",
          },
          { id: 5, type: "code", content: "cd app-mkg" },
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
    title: "Introduction to MKG",
    subtitle: "",
    source: {
      name: "",
      source: "",
    },
    subtasks: [
      {
        id: 0, //use in JSX as key
        title: "Design, Konzepte...",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Wir leben in einer Zeit in der es bereits zahlreiche Webseiten, Apps, Konzepte, Logos und Entwürfe gibt. Trotzdem werden immer wieder neue Framewokrs, Apps oder andere mediale Produkte auf den Markt gebracht.",
          },
          {
            id: 1,
            type: "text",
            content:
              "Teilen Sie sich in zwei ungefähr gleich große Gruppen auf. Recherchieren Sie unabhängig voneinander innovative Markteinführungen, die nicht älter als 7 Jahre sind. Entscheiden Sie sich als Gruppe für ein digitales Produkt (App, Software-System), das sich Ihrer meiner Meinung nach von anderen Produkten abhebt.",
          },
          {
            id: 2,
            type: "text",
            content:
              "In der Übung sollen jeweils beide Gruppen Ihr Prdoukt vorstellen und die Einzigartikeit Ihrer Wahl sachlich begründen. Mögliche Argumente können in der Nützlichkeit oder der Verbreitung des Produkts liegen.",
          },
        ],
      },
      {
        id: 1, //use in JSX as key
        title: "WunschApp",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Diskutieren Sie innerhalb Ihrer Gruppe eine Anwendung von der Sie sich vorstellen können, dass Sie diese konzipieren, entwickeln und auch vermarkten wollen würden.",
          },
          {
            id: 1,
            type: "text",
            content:
              "Hierbei sollten Sie eine rudimentäre Bedarfsanalyse - definieren Sie Ihre Zielsetzung und Zielgruppe - durchführen. Welche Gründe sprechen für das Vorhaben und rechtfertigen den Aufwand?",
          },
          {
            id: 2,
            type: "text",
            content:
              "Sie können in derselben Gruppenaufteilung wie für Aufgabe 1a) arbeiten  oder Sie gruppieren sich für diese Aufgabenstellung neu. Beachten Sie, dass Sie langfristig eine feste Gruppenaufteilung benötigen werden. Sie werden die Projektarbeiten in der gleichen Aufteilung durchführen.",
          }
        ],
      },
      {
        id: 2, //use in JSX as key
        title: "Zielgruppenanalyse",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Erstellen Sie einen Fragebogen für die Zielgruppenanalyse aus dem Konzeptionsprozess der vorherigen Aufgabe. Der Fragebogen sollte insgesamt 10 Fragen beinhalten, die Sie jeweils den Teilgruppen der Zielgruppe zuordnen. Begründen Sie auch die Wahl Ihrer Fragestellung.",
          },
        ],
      },
      {
        id: 3, //use in JSX as key
        title: "Bedarfsanalyse",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Verwenden Sie Ihren Fragebogen, um die andere Gruppe als Testgruppe für Ihre Analysephase zu verwenden. Wie schätzen Sie Ihr Vorhaben nach Ihrer Auswertung ein?",
          },
        ],
      }
    ],
  }
];




