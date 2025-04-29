import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState} from "react";
export default function NotesText() {
    const [notesInfo, setNotesInfo ] = useState(null); 

    const updateInfo = (newInfo) => {
        setNotesInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Make Your Notes</h2>
            <SearchBox updateInfo={updateInfo}/>
            {notesInfo && <InfoBox infos={notesInfo} />}
        </div>
    );
}