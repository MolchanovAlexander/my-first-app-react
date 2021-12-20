import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  
  return (
   <div >
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
         <div className={s.dialog+' '+s.active}> <NavLink to="/dialogs/1">Gufiy</NavLink></div>
         <div className={s.dialog}><NavLink to="/dialogs/1">Sveta</NavLink></div>
         <div className={s.dialog}><NavLink to="/dialogs/2">Nykyhvir</NavLink></div>
         <div className={s.dialog}><NavLink to="/dialogs/3">Dniwe</NavLink></div>
         <div className={s.dialog}><NavLink to="/dialogs/4">Ilona</NavLink></div>
         <div className={s.dialog}><NavLink to="/dialogs/5">Alesya</NavLink></div>
         <div className={s.dialog}><NavLink to="/dialogs/6">Katya</NavLink></div>
       </div>
     
     <div className={s.messages}>
       <div className={s.message}>What guf is in your hom</div>
       <div className={s.message}>yo noob</div>
       <div className={s.message}>dniwe!!!!</div>
       <div className={s.message}>Gufiy</div>
     </div>
     </div>
    </div>
  );
};
export default Dialogs;
