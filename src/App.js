import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gray-background">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SPEC-A 블록체인 인증서 개인정보 등록
        </p>
        <a
          className="join up"
          href="https://reactjs.org" //나중에 회원가입 페이지로 연동
          target="_blank"
          rel="noopener noreferrer"
        >
          회원가입
        </a>
      </header>
    </div>
  );
}

export default App;
