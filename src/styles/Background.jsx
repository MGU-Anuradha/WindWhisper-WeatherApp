import styled from "styled-components";
import backgroundImage from "../images/background.jpg";

export const Container = styled.div` 
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)),
        url(${backgroundImage});
    background-repeat: round;

    display: flex;
    align-items: center;
    justify-content: center;

    `;