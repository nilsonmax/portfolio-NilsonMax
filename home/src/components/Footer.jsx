import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> con <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/nilsonmax"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
           Nilson Benitez
          </span>
        </a>{" "}
        usando <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          El código del proyecto es de código abierto. Siéntase libre de forkear y hacer su propia versión.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
