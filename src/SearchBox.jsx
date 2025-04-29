// import React, {useState} from "react";
// import TextField from '@mui/material/TextField';
// import Button from "@mui/material/Button";
// import "./SearchBox.css";

// export default function SearchBox({updateInfo}) {
//     const [Notes, SetNotes] = useState("");

//     const getNotesInfo = async () =>{
//       const result = {
//         title : "Note Title ",
//         content : Notes,    
//       };


      

//       console.log(result);
//       return result;

//     };

//     const handleChange = (e) => {
//         SetNotes(e.target.value);
//     };

//     const handleSubmit = async(e) =>{
//         e.preventDefault();
//         const newInfo = await getNotesInfo();
//         updateInfo(newInfo);
//         SetNotes("");
        
//     };

//     return (
//     <div className="SearchBox">
//         <h3>Add a notes</h3>
//         <form onSubmit={handleSubmit}>
//         <TextField id="outlined-basic" label="Add Notes" variant="outlined" required value={Notes} onChange={handleChange} />
//         <br></br>
//         <br></br>
//         <Button variant="contained" type="submit">Save Notes</Button>
//         </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInfo = {
      title,
      content,
    };
    updateInfo(newInfo);
    setTitle("");
    setContent("");
  };

  return (
    <div className="SearchBox">
      <h3>Add a note</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <TextField
          label="Note Content"
          variant="outlined"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br /><br />
        <Button variant="contained" type="submit">Save Note</Button>
      </form>
    </div>
  );
}
