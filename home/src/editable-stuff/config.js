// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nilson",
  middleName: "",
  lastName: "Benitez",
  message: " Altamente entusiasta, disfruto mucho en aprender y explorar nuevas tecnologías. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nilsonmax",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ProgramasJuegosMax",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nilson-max-benitez-marquez/",
    },
    // {
    //   image: "fa-solid fa-blog",
    //   url: "https://www.instagram.com/nilsonmax/",
    // },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/nilsonmax/",
    // },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "Sobre mí",
  imageLink: require("../editable-stuff/nilsonmax.png"),
  imageSizeW: 375,
  imageSizeH: 375,
  message_1: "🔶Soy Desarrollador 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 (𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 - 𝐁𝐚𝐜𝐤𝐞𝐧𝐝) e 𝐈𝐧𝐠𝐞𝐧𝐢𝐞𝐫𝐨 𝐞𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐜𝐚, altamente entusiasta en aprender las mejores practicas para mejorar como profesional, disfruto mucho explorar nuevas tecnologías, estándares y métodos que me permitan desarrollar aplicaciones modernas y potentes.",
  message_2: "🔶Soy una persona apasionada con los retos, me gusta mucho ayudar a las personas que me rodean en mi ámbito laboral o personal, cuando entiendo las problemáticas de un proyecto para brindar una optima solución, la comparto con todo el equipo, si ellos les va bien a mi también, no soy egoísta.",
  message_3: "🔶Me gusta enseñar lo que se, y eso me ayuda a mejorar cada día lo que domino y crear una red de amigos que también me ensañan lo que saben, siempre estoy dispuesto aprender mas, ya que la curiosidad es una cualidad que me caracteriza, soy autodidacta, pues siempre quiero saber de manera integral, específica y general acerca de cualquier tema.",
  resume: "https://drive.google.com/file/d/14qOXz6Ldzv6nrHBmYQvitUc1Gl7Q8Am2/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Proyectos Recientes",
  gitHubUsername: "nilsonmax",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/nilsonmax.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/nilsonmax.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "Estructuras de datos", value: 70 },
    { name: "SQL", value: 90 },
    { name: "HTML/CSS", value: 50 },
    { name: "Python", value: 25 },
    { name: "C/C++", value: 65 },
    { name: "C#", value: 50 },
  ],
  softSkills: [
    { name: "Cooperaciòn", value: 90 },
    { name: "Planificaciòn y organizaciòn", value: 70 },
    { name: "Liderazgo", value: 90 },
    { name: "Resolución de problemas", value: 90 },
    { name: "Adaptabilidad", value: 80 },
    { name: "Mente Abierta", value: 70 },
    { name: "Toma de desiciones", value: 90 },
    { name: "Pensamiento Logicò", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Ponerse en contacto",
  message:
    "¡Actualmente estoy buscando oportunidades de ingeniería de software, Full Stack Developer o aprendizaje automático a tiempo completo! Si conoce algún puesto disponible, si tiene alguna pregunta o si solo quiere saludar, no dude en enviarme un correo electrónico a",
  email: "nilsonbenitez2016@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiencias",
  data: [
    {
      role: '	𝐅𝐫𝐞𝐞𝐥𝐚𝐧𝐜𝐞: 𝐏𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 𝐢𝐧𝐝𝐞𝐩𝐞𝐧𝐝𝐢𝐞𝐧𝐭𝐞',// Here Add Company Name
      companylogo: require('../assets/img/Metin_copia.png'),
      date: 'Ene. 2016 - actualidad · 6 años 9 meses, Medellín, Antioquia, Colombia.',
      experience: 'Mi experiencia es mas orientado a diseño y desarrollo web Full-Stack (frontend - backend), y personalización de video juegos llamados metin2. Los lenguajes y herramientas utilizados en estos proyectos c++, python, mysql, html, css, Bootstrap, tailwind, php, JavaScript. React, Redux, node, postgrestsql, express, sequelize. Instalación y configuración de hosting web y servidores en FreeBSD. También soporte técnico en reparación de computadoras y telecomunicación en telefonías de internet.',
      aptitudes: '𝐀𝐩𝐭𝐢𝐭𝐮𝐝𝐞𝐬: MySQL · C++ · Gestión de proyectos · Liderazgo · Autodidacta · Curiosidad intelectual · Compromiso · Responsabilidad · Espíritu empresarial · Comunicación · Marketing · Inglés · Gestión.'
    },
    {
      role: '𝐈𝐧𝐠𝐞𝐧𝐢𝐞𝐫𝐨: 𝐂𝐞𝐧𝐭𝐫𝐨 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐯𝐨 𝐑𝐨𝐝𝐨𝐥𝐟𝐨 𝐥𝐥𝐢𝐧𝐚𝐬 · 𝐉𝐨𝐫𝐧𝐚𝐝𝐚 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚',
      companylogo: require('../assets/img/colegio.jpg'),
      date: 'Nov. 2016 - May. 2017 · 7 meses, Córdoba, Colombia',
      experience:'Ingeniero Técnico, hacia soporte técnico en área telemáticas y en oficinas como servicio de reparación y repotenciación de computadoras, actualización de módulos e instalación de sistemas escolares.',
      aptitudes:'𝐀𝐩𝐭𝐢𝐭𝐮𝐝𝐞𝐬: MySQL · PHP · Redes inalámbricas · Sistemas operativos.'
    },
    {
      role: '𝐏𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥: 𝐂𝐲𝐛𝐞𝐫𝐌𝐚𝐱 · 𝐉𝐨𝐫𝐧𝐚𝐝𝐚 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚',
      companylogo: require('../assets/img/cybermax.jpg'),
      date: 'Ene. 2012 - sept. 2016 · 4 años 9 meses, Venezuela',
      experience:'ex-Dueño de negocio Cybercafe (sala de internet), Atención al cliente, administración del negocio, personal bajo mi mando, servicios de reparación de computadores, asesorías para desarrollo de páginas web, programas y videos juegos.',
      aptitudes:'𝐀𝐩𝐭𝐢𝐭𝐮𝐝𝐞𝐬: C++ · programador · Soporte técnico · Redes inalámbricas · Desarrollo de oportunidades de negocio · Administración · Gestión de proyectos · Servicio de atención al cliente.'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };
const blog = {
  // show: false,
  blog: "https://programas-juegos-max.blogspot.com",
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
