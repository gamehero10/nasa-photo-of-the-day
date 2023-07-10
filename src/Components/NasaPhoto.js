import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
   100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
   }
`

const StyledPhoto = styled.div`
   h3 {
      color: blue;
      font-size: 32px;
   }

   .date {
      color: orange;
      font-size: 27px;
   }

   .explanation {
      color: red;
      font-size: 20px;
   }

   img {
      opacity: 0;
      transform: scale(2) rotateZ(180deg);
      animation: ${kf} 0.5s ease-in-out forwards;
   }
`;










const NasaPhoto = (props) => {
   return(
    <StyledPhoto className = "nasa-photo-wrapper">
       <h3>{props.photo.title}</h3>
       <p className = "date">{props.photo.date}</p>
       <img src = {props.photo.hdurl}/>
       <p className = "explanation">{props.photo.explanation}</p>
    </StyledPhoto>
   )
}

export default NasaPhoto;