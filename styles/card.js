import css from "styled-jsx/css";

export const cardStyles = css.global`
    main {
      display: flex;
      padding: 5px;
    }

    .card-container{
      display: flex;
      flex-direction: column;
      padding: 1vw;
      margin: auto;
      border: solid;
      max-width: calc(95vw-10px);
      max-height: calc(95vh-10px);
    }

    .photo{
      margin: auto;
      max-width: min(75%,90vw);
    }

    .title{
      //max-width: 75vw;
      text-align: center;
      color: #000;
      margin-top: 1vh;
      font-size: 1.5em;
    }

    .quote{
      //max-width: 75vw;
      text-align: center;
      font-size: 1.2em;
    }
  }
`;
