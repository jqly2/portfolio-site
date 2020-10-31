import React from 'react';
import ParticlesBg from 'particles-bg'
import {Animated} from 'react-animated-css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from '@material-ui/core/Typography';

function Home() {
    return (
    <>
      <div className="home-container">
      <Animated animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={true}>
        <Typography variant="h1" gutterBottom>
          Jonathan Ly
        </Typography>
        <h1>Developer on the Internet</h1>
      </Animated>
        <div className="home_down">
        <Typography variant="h6" gutterBottom>
          Scroll Down For More Information
        </Typography>
          <ArrowDownwardIcon style={{ fontSize: '40' }}/>
        </div>
      </div>
    <ParticlesBg color="#4885FF" num={200} type="cobweb" bg={true}/>
    </>
    );
  }
export default Home; 