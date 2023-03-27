import React from "react";
import './main-page.scss';
import BeerBackground from './beer-background';
import BigIcon from './big-icon';
import Rules from './rules';
import TimeAndPlace from './time-and-place';
import Preparations from './preparations';
import QuestionsAndContact from './questions-and-contact';
import Footer from './footer';
import { Button } from '@nextui-org/react';

function MainPage() {
    return ( 
      <div className="App">
        <h1 className="bigHeading">Gigantoball</h1>
        <BigIcon/>
        {/* Heading Gigantoball */}
        <BeerBackground/>
        {/* Rules */}
        <Rules/>
        {/* Time and Place */}
        <TimeAndPlace/>
        {/* Preparations */}
        <Preparations/>
        {/* Questions and Contact */}
        <QuestionsAndContact/>
        {/* Footer ? */}
        <Footer/>
        <Button size="xl">Test</Button>
      </div>
     );
}

export default MainPage;