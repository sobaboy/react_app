function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className='modal'>
      <p>정말이신가요?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        취소
      </button>
      <button className='btn' onClick={confirmHandler}>
        확인
      </button>
    </div>
  );
}
export default Modal;

// 매개변수를 이 함수에서 사용하지 않으면 생략이 가능하다
// 오버레이 컴포넌트에 대한 마크업이다
// 모달 뒤에 보일 백드롭 컴포넌트도 다른 js 파일로 만들어준다
