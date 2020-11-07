import css from "styled-jsx/css";

export const cardStyles = css.global`
    main {
      display: flex;
    }

    .card-container{
      display: flex;
      flex-direction: column;
      padding: 2%;
      margin: auto;
      border: solid;
    }

    .photo{
      margin: 20px 5px;
    }

    .title{
      text-align: center;
      color: #000;
      font-size: 1.5em;
    }

    .quote{
      text-align: center;
      font-size: 1.2em;
    }
  }
`;
