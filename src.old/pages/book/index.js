import { useEffect, useState } from "react";
import MissionModel from "../../model/mission";
import MissionItem from "../../components/mission-item";

function Book({bookId = "v8KsmC158HQJ3DgQlsBh"}) {
    
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        MissionModel.getMissionByBook("v8KsmC158HQJ3DgQlsBh")
            .then((missions) => {
                setMissions(missions);
            });
    }, [bookId]);

    function renderMissionItem( mission, key ) {
        return (
            <li key={key}> 
                {MissionItem( mission )}
            </li>
        );
    }

    return (
        <>
            <header className="book-header">
                <h1> Minhas Missões</h1>
                <div>
                    <nav> Todas </nav>
                    <nav> Feitas </nav>
                </div>
            </header>
            <ul className="mission-card-list">
                {missions.map(renderMissionItem)}
            </ul>
        </>
    )
}

export default Book;