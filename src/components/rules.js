import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';

function Rules() {
    return (
        <div>
            <div className='icon-md'><GiDiceTwentyFacesTwenty/></div>
            <div className='full-width-text'>
                <ul>
                    <li>Spielmaterial sind ein Gymnastik-Ball, eine Gigantoflasche (die es umzuwerfen gilt) und jeweils eine 3l Flasche pro antretender*m Spieler*in / Team</li>
                    <li>Antreten darf entweder ein*e Spieler*in alleine oder als Team. Als Team könnt ihr euch eine 3l Flasche teilen, es trinkt immer nur eine*r.</li>
                    <li>Der Spielablauf ist der gleiche wie beim üblichen <a href="https://de.wikipedia.org/wiki/Flunkyball">Flunkyball</a>.</li>
                </ul>
            </div>
        </div>
    );
}

export default Rules;