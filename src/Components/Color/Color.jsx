import "./Color.css";
import { useState } from "react";



export default function Color({
  hex,
  role,
  contrastsText,
  id,
  styleColor,
  styleText,
  styleRole,
  clickDelete,
  updateNewColors,
  
}) {
let [isEditable,setIsEditable]= useState(false);
const [newHex,setNewHex]=useState(hex);
const [newRole,setNewRole]=useState(role);
const [newContrast,setNewContrast]=useState(contrastsText);


if(isEditable){
return (
     <section className="color-card" style={styleColor}>
      <p className="color-card-headline">{hex}</p>
      <p style={styleRole}>{role}</p>
      <p style={styleText}>Contrasts: {contrastsText} </p>
      
      
      
      <label htmlFor="roleChange">Role</label>
      <input type="text" id="roleChange" value={newRole} onChange={(event) => setNewRole(event.target.value)}/>
      
      <label htmlFor="hexChange">Hex</label>
      <input type="text" id="hexChange" value={newHex} onChange={(event) => setNewHex(event.target.value)} />
      <input 
    type="color" 
    value={newHex} 
    onChange={(event) => setNewHex(event.target.value)} 
  />
      <label htmlFor="contrastChange">Contrast</label>
      <input type="text" id="contrastChange" value={newContrast} onChange={(event) => setNewContrast(event.target.value)}/>
      <input 
    type="color" 
    value={newContrast} 
    onChange={(event) => setNewContrast(event.target.value)} 
  />
      <button onClick={() => {
  // We send the ID and the new object with your states
  updateNewColors(id, { 
    id: id, 
    role: newRole, 
    hex: newHex, 
    contrastText: newContrast 
  });
  setIsEditable(false); // Close the edit view
}}>
  Update Color
</button>
      <button onClick={()=>setIsEditable(false)}>cancel</button>
    </section>
  );
}

  return (
    <section className="color-card" style={styleColor}>
      <p className="color-card-headline">{hex}</p>
      <p style={styleRole}>{role}</p>
      <p style={styleText}>Contrasts: {contrastsText} </p>
      <button onClick={clickDelete}>Delete</button>
      <button onClick={()=>setIsEditable(true)}>Edit</button>
    </section>
  );
}
