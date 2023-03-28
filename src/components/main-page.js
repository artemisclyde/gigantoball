import React from "react";
import './main-page.scss';
import Rules from './rules';
import TimeAndPlace from './time-and-place';
import Preparations from './preparations';
import QuestionsAndContact from './questions-and-contact';


function MainPage() {
return ( 
      <div className="App">
        <div className="background"/>
        <div className="content">
            {/* Heading Gigantoball */}
            <h1 className="bigHeading">Gigantoball</h1>
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
        </div>
      </div>
    );
}

export default MainPage;