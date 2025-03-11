const projects = [
    {
      title: 'Project Management Tool',
      description: 'Developed an end-to-end project and Task management tool for improving team collaboration and productivity.',
      imageUrl: '/Project_Management.webp',
      tags: ['Next.js', 'Hono', 'Appwrite', 'TailwindCSS', 'OAuth'],
      link: 'https://jira-clone-virid-five.vercel.app',
      linkTitle: 'Website Link',
    },
    {
      title: 'Song Recommender',
      description: 'Recommends you songs based on weather predictions of your travel location.',
      imageUrl: '/songrecommender.webp',
      tags: ['Next.js', 'WeatherStackAPI', 'GooglePlacesAPI', 'YoutubeDataAPI'],
      link: 'https://song-recommender-one.vercel.app/',
      linkTitle: 'Website Link',
    },
    {
      title: 'E-commerce (Food)',
      description: 'I was the Project Manager in developing end-to-end Full-Stack website for capmus Parlor for seamless delivery system.',
      imageUrl: '/Amul-min.webp',
      tags: ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
      link: 'https://ecom-frontend-4x7f.onrender.com',
      linkTitle: 'Website Link',
    },
    {
      title: 'Food App (Frontend Only)',
      description: 'Developed a frontend Food delivery website.',
      imageUrl: '/front-end.webp',
      tags: ['HTML', 'CSS', 'Javascript'],
      link: 'https://github.com/devmit29/food-app-frontend',
      linkTitle: 'Github Link',
    },
    {
      title: 'Currency Convertor',
      description: 'A simple project which fetches currency conversion rate and country flag using API calls',
      imageUrl: '/proj2.png',
      tags: ['Javescript', 'HTML', 'CSS'],
      link: 'https://github.com/devmit29/JsSmallProjects/tree/main/Curruency%20Convertor',
      linkTitle: 'GitHub Link',
    },
    {
      title: 'To-Do App',
      description: 'A Basic To-Do app which stores Tasks in LocalStorage of the Browser',
      imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      tags: ['ReactJS', 'ContextAPI', 'Javescript'],
      link: 'https://github.com/devmit29/to-do-app',
      linkTitle: 'GitHub Link',
    },
    {
      title: 'Rock Paper Scissors',
      description: 'A Basic JS game of Rock Paper Scissors',
      imageUrl: '/RPS.png',
      tags: ['HTML', 'CSS', 'Javescript'],
      link: 'https://github.com/devmit29/JsSmallProjects/tree/main/RockPaperScissors',
      linkTitle: 'GitHub Link',
    },
    
];
  

function getProjects(req, res) {
   try {
     res.json(projects).status(200);
   } catch (error) {
       res.status(500
       ).json({ message: error.message
       });
   }
}

module.exports = getProjects;