import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  line-height: 1.2;
  word-wrap: break-word;
  font-size: 10px;
  font-family: 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', NanumGothic, 'Malgun Gothic', sans-serif;
  height: 100%;
  background: #211d46;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
}
ol, ul, li {
  list-style: none;
}
a {
  color: #000;
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
  border: 0;
}
button {
  border: 0;
  background: transparent;
  curs
}
p, pre, h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}
@keyframes fadeIn {
  from {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}
@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
    background: #FFFFFFC9;
    color: #585858;
    border: 0.1rem solid #433B3B;
  }
}
@keyframes blink {
  0% {
    filter: drop-shadow(0.2rem 0.3rem 1rem yellow);
  }
  100% {
    background: #ffc200c9;
  }
}
@keyframes blink_practice {
  100% {
    filter: drop-shadow(0.2rem 0.3rem 1rem yellow);
  }
}
@keyframes shake{
  0%{
      transform: rotate(0.5deg);
    }
  25%{
    transform: rotate(-0.5deg);
  }
  50%{
    transform: rotate(0.5deg);
  }
  75%{
    transform: rotate(-0.5deg);
  }
  100%{
    transform: rotate(0.5deg);
  }
}
`;

export default GlobalStyle;
