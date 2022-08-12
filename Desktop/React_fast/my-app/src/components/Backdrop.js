function Backdrop(props) {
  return <div className='backdrop' onClick={props.onCancel} />;
}
export default Backdrop;
// 열고 닫는 태그 사이에 내용이 없으면 이런 식으로  self-closing 할 수 있다
