import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    // const [click, setclick] = useState(true)


    // const clicked = (e) => {
    //     click ? e.target.className = 'redtrue' : e.target.className = 'red'
    //     console.log(e.target);
    //     console.log(click);
    //     setclick(!click)
    // }


    return ( 
        <>
        <NavLink activeclassname="redtrue" to='/'>Speisekarte</NavLink>
<NavLink activeclassname="redtrue" to='/Kontakt'>Kontakt</NavLink>
<NavLink activeclassname="redtrue" to='/Offen'>Öffnungszeiten</NavLink>
<NavLink activeclassname="redtrue" to='/Galerie'>Galerie</NavLink>
        </>
     );
}
 
export default Nav;