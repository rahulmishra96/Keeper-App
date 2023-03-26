import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'


function CreateNote(props){
    const [isExpanded,setExpended] = useState(false);

const [note,setNote] = useState({
    title: "",
    content:""
});

function handleChange(event){
    const {name,value} = event.target;

    setNote((prevNote)=>{
        return {
            ...prevNote,
            [name]:value
        }
    });
}

function handleClick(event){
    props.onAdd(note);
    setNote({
        title : "",
        content : ""
    });
    event.preventDefault();
}
function expend(){
    setExpended(true);
}


    return (<div>
        <form className="create-note">
           {isExpanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title"></input>}
            <textarea onClick={expend} onChange={handleChange} value={note.content} name="content" placeholder="Content" rows = {isExpanded?"3":"1"}></textarea>
            <Zoom in={isExpanded}>
            <Fab onClick={handleClick}><AddIcon/></Fab>
            </Zoom>
        </form>
    </div>);
}
export default CreateNote;