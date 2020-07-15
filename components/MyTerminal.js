import Terminal from 'terminal-in-react';

export default class MyTerminal extends React.Component {
    
    showMsg = () => 'Hello World'
    about = () => "I am Jai, 21-year-old currently pursuing Bachelor's degree in Computer Science from Jaypee Institute of Information Technology. I am a full stack developer. I code mostly in Javascript and blog about the technologies I use in my projects. Besides that, I am a core team member at DSC JIIT Noida, where I mentor students on web development. \n\nIn my free time, I play GTA Online and Witcher-3. I love cycling, swimming, and trekking."
 
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "93.4vh"
      }}>
        <Terminal
          color='green'
          backgroundColor='#1e2227'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" ,
            "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6)","overflow-x": "hidden", "overflow-y": "hidden"}}
          commands={{
            'open-github': () => window.open('https://github.com/JaiParakh', '_blank'),
            'open-linkedin': () => window.open('https://www.linkedin.com/in/jai-parakh-5626b4178/', '_blank'),
            'open-medium': () => window.open('https://medium.com/@parakh.js', '_blank'),
            'open-twitter': () => window.open('https://twitter.com/parakh_js', '_blank'),
            'contact': () => window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact.jaiparakh@gmail.com&tf=1', '_blank'),
            college: () => 'Jaypee Institute Of Information Technology, Noida',
            about: this.about,
            skills: () => `["Javascript", "React", "Node.js", "Next.js", "Express", "Ethereum", "Solidity", "Web3.js", "MongoDB", "Python", "C++", "HTML5", "Google Cloud Platform", "CSS3", "C", "PHP", "Wordpress"] \n\n length: 17`,
            projects: () => `["Cura (Build For Digital India)", "Rex", "Study Jamm", "Coretech"] \n\n length: 4`,
            
          }}
          descriptions={{
            'open-github': 'Opens Github Profile',
            'open-linkedin': 'Opens Linkedin Profile',
            'open-medium': 'Opens Medium Profile',
            'open-twitter': 'Opens Twitter Profile',
            'contact': 'Contact',
            'college': 'Where does he study?',
            'about': 'Who is this Guy?',
            'skills': 'What are his skills?',
            'projects': 'What projects has he worked on?'
          }}
          msg= "Hi, I am Jai, a Fullstack Developer, Mentor, Blogger, Gamer and a Jedi. To begin with type 'help' to see the list of commands."
        />
      </div>
    );
  }
}