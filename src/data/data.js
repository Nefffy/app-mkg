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
  },
  {
    id: 2, //use in JSX as key
    title: "Introduction to the Adobe Creative Cloud",
    subtitle:
      "2-weeks for discussion and preparation (with support in PC-Pool~1)",
    source: {
      name: "X",
      source: "https",
    },
    subtasks: [
      {
        id: 0, //use in JSX as key
        title: "Adobe Illustrator - Learning by Doing*",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Erstellen Sie mit AI eine Illustration/Ablaufgrafik zu einem der foglenden Themen:",
          },
          {
            id: 1,
            type: "list",
            content: [
              "http-request",
              "Ablauf einer Turingmaschine",
              "Interpreter vs. Compiler",
              "Freies Thema"
            ],
          },
          {
            id: 2,
            type: "text",
            content:
              "indem Sie den Prozess bzw. Sachverhalt bildlich erklären. Hierbei können Sie sich an dem Beispiel aus der Vorlesung oder den folgenden Illustrationen",
          },
          {
            id: 3,
            type: "code",
            content: "Nebenläufigkeit am Beispiel Browser",
          },
          {
            id: 4,
            type: "img",
            content: "..//assets/browser_overview_02.png",
            alt: "Concurrency-Browser",
          },
          {
            id: 5,
            type: "text",
            content:
              "orientieren. Arbeiten Sie dabei mit den in der Übung vorgestellten Werkzeugen und Tutorialmaterial.",
          },
          {
            id: 6,
            type: "text",
            content:
              "Beachten Sie bei der Umsetzung der Grafik und der einzelnen Bestandteile folgende grundlegende Gestaltgesetze:",
          },
          {
            id: 7,
            type: "list",
            content: [
              "Ähnlichkeit: Ähnlichkeiten deuten Zusammengehörigkeit an (z.B. die Farbe Blau repräsentiert das WWW.)",
              "Nähe: Objekte, die in Verbindung stehen, werden nah zueinander platziert (z.B. Tabs sind unter dem Symbol für das WWW abgebildet.)",
              "Prägnanz: Abhebung eines einzelnen Objekts; kann Aufmerksamkeit implizieren.",
              "Geschlossenheit: Mehrere Elemente werden als Einheit wahrgenommen (z.B. Gruppe Tabs).",
              "Kontinuität: Linien oder Kurven werden durch unsere Informationsverarbeitung fortgesetzt.",
              "Gemeinsame Region/Ausrichtung: Elemente in einer Region werden als Gruppe klassifiziert bzw. mehrere unterschiedliche Elemente, welche die gleiche"+
              " Richtung annehmen, werden ebenfalls als zusammengehörig wahrgenommen (z.B. Gruppe Tabs Richtung Browser-Symbol.).",
              "Verbundene Elemente: Verbundene Elemente werden als Einheit aufgefasst (z.B. Icon aus Mauszeiger und Hand).",
            ],
          },
          {
            id: 8,
            type: "code",
            content: "Beispiel Gestaltgesetz: Nähe schafft Informationskontext",
          },
          { id: 9, type: "img", content: "../assets/gg_example.png", alt: "" },
        ],
      },
      {
        id: 1, //use in JSX as key
        title: "Typografie",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Wählen Sie geeignete Schriften für Ihre Illustration oder Ihr Logo aus. Wie begründen Sie die Verwendung Ihrer Auswahl? Orientieren Sie sich hier z.B. an",
          },
          { id: 1, type: "code", content: "Buch: Schrifttypen – Verstehen Kombinieren: Schriftmischung als Reiz in der Typografie, Philipp Stamm, Berlin, Boston: Birkhäuser, 2020. https://doi-org.ezproxy2.hsrw.eu/10.1515/9783035609011" },
          {
            id: 2,
            type: "text",
            content:
              'Wir betrachten einen Mix aus verschiedenen Schriften an der aktuellen Darstellung in "Exercise 0". Welche Unterschiede, die Ihnen nun aus der Vorlesung bekannt sind, fallen Ihnen auf?',
          }
        
        ],
      },
      {
        id: 2, //use in JSX as key
        title: "Adobe Illustrator - Logo Entwicklung*",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              "Orientieren Sie sich an der Logo-Entwicklung aus der Vorlesung bzw. Übung, um ein Logo (Farbe, Form) für Ihre WunschApp anzufertigen.",
          },
          { id: 1, type: "img-small", content: "../assets/logo.svg", alt: "" },
        ],
      },
    ],
  },
  {
    id: 3, //use in JSX as key
    title: "Design via Prototyping",
    subtitle:
      "Deadline 8th May (with support in PC-Pool~1)",
    source: {
      name: "X",
      source: "https",
    },
    subtasks: [
      {
        id: 0, //use in JSX as key
        title: "Get started I",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content:
              'Choose one Design-Tool (Adobe Xd, Figma) and walk throught the "Get started".',
          },
          {
            id: 1,
            type: "text",
            content:
              "In case you are working on a game, work with a corresponding engine or tool.",
          }
        ],
      },
      {
        id: 1, //use in JSX as key
        title: "Get started II*",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content: 'Workout a "first" Design-Version of your project and take care of:',
          },
          {
            id: 1,
            type: "list",
            content: [
              "Aim",
              "User-Stories",
              "Information-Design",
              "Navigation",
              "Characters/Game-Story",
            ],
          },     
          {
            id: 2,
            type: "text",
            content:
              'To get the "*" you need to investigate some effort into your chosen tool. Please send me the link (via Moodle-Submission) of your rudimentary design-version until 8th May.',
          }
        ],
      },
      {
        id: 2, //use in JSX as key
        title: "Prototyping Transfer*",
        done: false, // flag: did I solve it already?
        content: [
          {
            id: 0,
            type: "text",
            content: 'How to import an Adobe Xd Prototype into Figma? Create a simple example of a design including prototyping in Adobe Xd and transfer it to Figma incl. all your prototype links. You can demonstrate this in the exercises to get the (*).',
          }
        ],
      }
    ],
  }
];




