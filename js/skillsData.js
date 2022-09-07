const skillsData = [
  { skill: "HTML5", icon: '<i class="devicon-html5-plain colored"></i>' },
  { skill: "CSS", icon: '<i class="devicon-css3-plain colored"></i>' },
  { skill: "Javascript", icon: '<i class="devicon-javascript-plain colored"></i>' },
  { skill: "React", icon: '<i class="devicon-react-original colored"></i>' },
  { skill: "C#", icon: '<i class="devicon-csharp-plain colored"></i>' },
  { skill: "Java", icon: '<i class="devicon-java-plain colored"></i>' },
  { skill: "Bootstrap", icon: '<i class="devicon-bootstrap-plain colored"></i>' },
  { skill: "SASS", icon: '<i class="devicon-sass-original colored"></i>' },
  { skill: "Wordpress", icon: '<i class="devicon-wordpress-plain colored"></i>' },
  { skill: "Figma", icon: '<i class="devicon-figma-plain colored"></i>' },
  { skill: "Git", icon: '<i class="devicon-git-plain colored"></i>' },
  { skill: "MongoDB", icon: '<i class="devicon-mongodb-plain colored"></i>' },
  { skill: "MySQL", icon: '<i class="devicon-mysql-plain colored"></i>' },
  { skill: "SQL Server", icon: '<i class="devicon-microsoftsqlserver-plain colored"></i>' },
  { skill: "Nodejs", icon: '<i class="devicon-nodejs-plain colored"></i>' },
  { skill: "AWS", icon: '<i class="devicon-amazonwebservices-original colored"></i>' },
  { skill: "Sketch", icon: 's' },
  { skill: "Markdown", icon: 'M' }
];

var skillsWrapper = document.getElementById("skill-change");
const skillElements = skillsData.map((skill) => {
  return `
    <div class="service-thumb">
        <span class="skill-icons html">
          ${skill.icon}
        </span>
        <h4>${skill.skill}</h4>
      </div> 
      `;
}).join('');

console.log(skillElements)
skillsWrapper.innerHTML = skillElements

/* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
*/
