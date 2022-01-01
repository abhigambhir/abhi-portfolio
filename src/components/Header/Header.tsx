import { Container } from "./styles"
import { BrowserRouter as Router } from "react-router-dom"
import {NavHashLink, HashLink} from "react-router-hash-link"
import { useEffect, useState } from "react"

import Curriculo from "../../assets/CV_JoaoTulio.pdf"
export function Header(){
  const [isActive, setActive] = useState(false);

  function toggleTheme(){
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle('light');
  }

  function closeMenu(){
    setActive(false);
  }


  return(
    <Container className="header-fixed">
        <Router>
          <HashLink smooth to="#home" className="logo">
            <span>J</span>
            <span>Tulio</span>
          </HashLink>
          
          <input onChange={toggleTheme} className="container_toggle" type="checkbox" id="switch" name="mode"/>
          <label htmlFor="switch">Toggle</label>

          <nav className={isActive ? 'active' : ''}>
            <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
            <NavHashLink smooth to="#sobre" onClick={closeMenu}>About Me</NavHashLink>
            <NavHashLink smooth to="#portfolio" onClick={closeMenu}>Portfolio</NavHashLink>
            <NavHashLink smooth to="#Films" onClick={closeMenu}>Films</NavHashLink>
            <NavHashLink smooth to="#Blog" onClick={closeMenu}>Blog</NavHashLink>
            {/* <a href={Curriculo} download className="button">Blog</a> */}
          </nav>

          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "Fechar menu" : "Abrir menu"} 
            className={isActive ? 'menu active' : 'menu'} 
            onClick={() => {setActive(!isActive)}}
            >
          </div>

        </Router>
      </Container>
      
  )
}