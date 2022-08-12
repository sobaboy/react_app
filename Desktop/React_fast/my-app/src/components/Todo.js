// second component  컴포넌트 폴더를 따로 만들어서 관리 해준다

import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // react 훅   바로 호출돼야한다   // 초기값을 줄 수 있다
  // 모달이 열려있으면 안되니까 초기값은 false
  // modalIsOpen element를 이용해서 조건적으로 JSX코드의 모달과 백드롭을 렌더링한다
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  // 세개의 버튼이 각각 다른 동작을 하고 있다
  // 코드만 보면 다들 같은 동작을 하지만 로직만 한 군데서 정의하고 세군데서 다르게 사용할 수 있다
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          지우기
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;

// export -> 이 파일 외부에서도 이 함수를 이용할 수 있다
// 컴포넌트의 첫글자는 대문자로 시작하도록 한다(내장 HTML element와의 구분을 위해서)
// App.js에서 중복되는 코드를 여기로 붙여넣기 한 후에 App.js 에서 컴포넌트를 불러온다
// 내장 HTML element와 사용자가 정의한 element는 lower case 인가 upper case 인가로 구분한다

// 이 매개변수를 props 라고한다. props는 객체이다
// todo 컴포넌트 안의 props는 text라는 property를 가지는 객체가 된. 그리고 text 속성마다 다른 value를 가진다
// props 객체 안에서 각각의 text의 value값을
// jsx 코드 안에 {} 로 표현해주면 html로 처리 되지 않고 JS 로 처리된다

// js는 명령형 접근 / 리액트는 선언형 접근

// 너무 복잡하고 긴 jsx 블록은 피하고 개별적인 컴포넌트를 만들어주는 게 좋다
