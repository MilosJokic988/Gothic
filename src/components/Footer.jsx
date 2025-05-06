import React from "react";
import{Container}from 'react-bootstrap';
const Footer=()=>{

    return(

        <footer className="bg-dark text-light text-center py-3 mt-auto">
        <Container>
          <small>&copy; {new Date().getFullYear()} GothicSite. All rights.</small>
        </Container>
      </footer>

    );
};

export default Footer;