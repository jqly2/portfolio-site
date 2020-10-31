import React from 'react';
import {Animated} from 'react-animated-css';
import linkIcon1 from '../../external/img/link.png';
import gitIcon1 from '../../external/img/git.png';
import linkIcon2 from '../../external/img/link.png';
import gitIcon2 from '../../external/img/git.png';
import EmailIcon from '@material-ui/icons/Email'
import profile from '../../external/img/profile.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AttachmentIcon from '@material-ui/icons/Attachment';

function About() {
  return (
  <>
    <div className="about-top"></div>
        <Animated animationIn="fadeInUp" animationOut="fadeOutUp" isVisible={true}>
          <div className="about-container">
            <div className="about-main">
              <img src={profile} alt="Profile"/>
              <p><b>Name:</b> Jonathan Ly</p>
              <div className="contact-tabs">  
                  <div className="contact-tabs-nav" ><a href='https://www.linkedin.com/in/jonathan-q-ly/'> <img src={linkIcon1} onMouseOver={e => (e.currentTarget.src = linkIcon2)} alt="Link" /></a></div> 
                  <div className="contact-tabs-nav" ><a href='https://github.com/jqly2' > <img src={gitIcon1} onMouseOver={e => (e.currentTarget.src = gitIcon2)} alt="Github" /></a></div>
                  <div className="contact-tabs-nav" ><a href='mailto:jonathanly213@gmail.com' > <EmailIcon fontSize="large" style={{ color: 'black' }}/></a></div>
                  <a href="https://drive.google.com/file/d/1YMWHm6ncF6tPKB9Lf22kpaedb2s_wOBT/view?usp=sharing"><AttachmentIcon fontSize="large" /></a>      
              </div>
            </div>
            <List component="nav" className='about-list' aria-label="mailbox folders">
              <ListItem divider>
                <LanguageIcon />
                <ListItemText primary="Javascript, React/Redux, HTML, CSS/Sass" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <BuildIcon />
                <ListItemText primary="Github, Npm, Visual Code Studio, Material UI, Google API" />
              </ListItem>
              <Divider light />
              <ListItem divider>
                <ListAltIcon />
                <ListItemText primary="A developer who spent the past five years dedicating myself to the craft of web development. During this period of time, work was done with 
                both freelancing contacts and start-up companies that helped solidfiy the skillset needed to provide excellent products within timely manner." />
              </ListItem>
            </List>
            {/* <div className="about-main about-text">
              <p><b>Title:</b> Frontend Web Developer</p>
              <p><b>Skills:</b> Javascript, React/Redux, HTML, CSS/Sass</p>
              <p><b>Location:</b> Based in Bay Area</p>
              <p><b>Bio:</b> A developer who spent the past five years dedicating myself to the craft of web development. During this period of time, work was done with 
                both freelancing contacts and start-up companies that helped solidfiy the skillset needed to provide excellent products within timely manner.
              </p>
            </div> */}
          </div>
        </Animated>
    <div className="about-bottom"></div>
  </>
  );
}

export default About;
