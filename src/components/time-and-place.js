import { GiCalendar } from 'react-icons/gi';

function TimeAndPlace() {
    return ( 
        <div className='full-width-text'>
            <div className='icon-md'><GiCalendar/></div>
            <p>Das nächste Gigantoball-Spektakel wird am 15. Juli 2023 in Koblenz stattfinden.</p>
            <p>Für Teilnahme und nähere Informationen schreib uns einfach eine flotte Mail!</p>
        </div>
     );
}

export default TimeAndPlace;