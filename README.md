# SW2_Quiz
Software project Quiz Team

To Run APP:
  download node,
  download xampp,
  install npm,
  install npm express,
  install npm body-parser,
  install npm cors,
  install npm mysql.
To Run APP with Docker:
  download docker desktop,
  download docker toolbox,
  start docker,
  change direction to project location,
  go into api folder write this command docker build -t 7oda/node-web-app . ,
  go into publc folder write this command docker build -t 7oda/static . ,
  go to location of docker compose file write this command docker-compose up .
  
 Our Apis:
  API URL: https://qui-data.herokuapp.com,
  Routes:
      (‘/title’) => Get Request: -Return quiz Title = Title,   Skill Type of this quiz =  SkillType.
      (‘/UserScore’) => Get Request: -Return User Id = ID,    Quiz Title = Title,    User Score in This Quiz = Score.
  
