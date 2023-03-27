import React from "react";
import './main-page.scss';
import BigIcon from './big-icon';
import Rules from './rules';
import TimeAndPlace from './time-and-place';
import Preparations from './preparations';
import QuestionsAndContact from './questions-and-contact';
import { Button } from '@nextui-org/react';


function MainPage() {
const handleClick = (log) => {
    console.log(`${log}`);
}
return ( 
      <div className="App">
        <div className="background"/>
        <div className="content">
            {/* Heading Gigantoball */}
            <h1 className="bigHeading">Gigantoball</h1>
            <section>
                <BigIcon/>  
            </section>
            {/* Rules */}
            <section>
                <Rules/>
            </section>
            {/* Time and Place */}
            <section>
                <TimeAndPlace/>
            </section>
            {/* Preparations */}
            <section>
                <Preparations/>
            </section>
            {/* Questions and Contact */}
            <section>
                <QuestionsAndContact/>
            </section>
            <Button onPress={() => handleClick('hihihihi')} size="xl">A function I have not thihihi</Button>
        </div>
      </div>
     );
}

export default MainPage;