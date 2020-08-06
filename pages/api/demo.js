/*const mongoose = require('mongoose');
const About = require('./models/About');

export default async (req, res) => {
    let re = await About.find({});
    res.send(JSON.stringify({name: re}));
}

mongoose.connect('mongodb+srv://parak_js:IamBatman@cluster0-ojpyq.mongodb.net/portfolio?retryWrites=true&w=majority');*/

const mongoose = require('mongoose');
const About = require('./models/About');

//About.find({}).then(re => console.log(re));

let info = new About({
    skills: ["Javascript", "React", "Node.js", "Next.js", "Express", "MongoDB", "Python", "C++", "Web3.js", "Solidity", "Ethereum", "PHP", "HTML5", "Google Cloud Platform", "CSS3", "C", "Wordpress","G Suite APIs"],
    description: ["I am Jai, 21-year-old currently pursuing Bachelor's degree in Computer Science from Jaypee Institute of Information Technology. I am a Full stack and Blockchain developer. I code mostly in Javascript and blog about the technologies I use in my projects. Besides that, I am a core team member at DSC JIIT Noida, where I mentor students on web development.",
    "In my free time, I play GTA Online and Star Wars Battlefront-2. I love cycling, swimming, and trekking."],
    socialMedia: [{
        faIcon: "faEnvelope",
        url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact.jaiparakh@gmail.com&tf=1"
    },{
        faIcon: "faLinkedinIn",
        url: "https://www.linkedin.com/in/jai-parakh-5626b4178/"
    },{
        faIcon: "faGithub",
        url: "https://github.com/JaiParakh"
    },{
        faIcon: "faMediumM",
        url: "https://medium.com/@parakh.js"
    },{
        faIcon: "faTwitter",
        url: "https://twitter.com/parakh_js"
    },{
        faIcon: "faInstagram",
        url: "https://www.instagram.com/parakh.js/"
    }]
});

info.save((err, re) => {
    if(!err){
        console.log(re);
    }
    else{
        console.log(err);
    }
})

mongoose.connect('mongodb+srv://parak_js:IamBatman@cluster0-ojpyq.mongodb.net/portfolio?retryWrites=true&w=majority');

