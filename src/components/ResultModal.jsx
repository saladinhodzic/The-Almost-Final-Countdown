import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const resultLost = timeRemaining <= 0;
  const timeLeft = (timeRemaining / 1000).toFixed(2);

  return (
    <dialog ref={dialog} className="result-modal">
      {resultLost && <h2>You lost.</h2>}
      <p>
        Target time was<strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
