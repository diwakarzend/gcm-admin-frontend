import styled from 'styled-components';

export const DasBoardHeader = styled.div`
  display: flex;
  align-items: center; 
  img {
      width: 100px;
      height: auto;
  } 
`;

export const HomePageStyle = styled.div`
background: rgba(0,0,0, 0.1);
h1, h2, h3, h4, h5, h6 {
    margin: 0 0  20px;
}
.box-container, .input-text {
    background: #fff;
    box-shadow: 6px 4px 10px -3px rgba(0, 0, 0, 0.15);
    padding: 30px 15px;
    border-radius: 7px;
}
.page-title label {
    font-weight: bold;
    font-size: 22px;
    display: block;
    margin: 0 0 20px;
}
img {
    max-width: 100%;
    height: auto;
}
.ck-editor__editable_inline {
    min-height: 300px;
}
figure {
    margin: 0;
}

input {
    height: 40px;
    border-radius: 4px;
    border: 1px solid #000;;
    background-color: #fff;
    padding: 0 10px;
    font-size: 11px;
    font-family: Roboto;
    width: 100%;
    &:focus {
        outline: none;
        background-color: #fff;
        border: solid 1px rgba(0, 0, 0, 0.2);
    }
}
`;