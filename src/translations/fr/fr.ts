import titles from "./titles";
import navbar from "./navbar";
import projects from "./projects";
import { ASSETS_BASE_URL } from "../../constants";

export default {
  titles,
  navbar,
  projects,
  job: "Développeur Javascript / React.js / Vue.js & Node.js",
  programming: "programmation",
  horrorMovies: "films d'horreur",
  videoGames: "jeux vidéos",
  citio: "CITiO",
  greetings: "Salut, Moi c'est Ivan 🖖.",
  hobbies:
    "J'adore la {programming} 👨‍💻, les {horror_movies} 🧟🔪 et les {video_games} 🎮.",
  currentJob: "Je suis actuellement Développeur Frontend à {job} 🚌",
  resumeButton: "mon CV",
  resumeLink: `${ASSETS_BASE_URL}/cv.pdf`
};
