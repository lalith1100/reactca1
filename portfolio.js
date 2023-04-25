import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'MY PORTFOLIO',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'LALITH KHUMAR A S',
  role: 'Full stack developer',
  description:
    'A engineering student from SKCET',
  resume: 'https://tse1.explicit.bing.net/th?id=OIP.E52u0wNbzSrgrZgapUZb2wHaH7&pid=Api&P=0',
  social: {
    linkedin: 'https://www.instagram.com/dude_awesome1100/?igshid=YmMyMTA2M2Y%3D',
    github: 'https://github.com/lalith1100/project.git',
  },
}

const projects = [
  
  {
    name: 'Movie Tracker',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: '',
    livePreview: '',
  },
  
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java',
  'Java Spring Boot',
 
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lalithkhumar88@gmail.com',
}

export { header, about, projects, skills, contact }
