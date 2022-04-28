import React from "react";
import styles from "../../styles/Header.module.css";

//assets
import Logo from "../../assets/img/valorant.png";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";

const Header = ()=> {
    return(
      <header>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{backgroundColor:"black"}}>
          <div className="text-center">
              <img src={Logo} alt="logo" style={{backgroundColor:"red",margin:"50px",width:50, height:50 }}></img>
              <h1>VALORANT WIKI</h1>
          </div>
          <nav>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/weapons" className={styles.navLink} >
                        Weapons
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/maps" className={styles.navLink} >
                        Maps
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/agents" className={styles.navLink} >
                        Agents
                    </Link>
                </li>
              </ul>
          </nav>
          </AppBar>
          </Box>
      </header>
    )
}

export default Header;