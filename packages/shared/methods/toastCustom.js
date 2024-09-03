import toast from 'react-hot-toast'

export const toastCustom = (msg) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <h6 className="tx-inverse tx-14 mg-b-0 mg-r-auto">{msg.sender}</h6>
          <small>11 분전</small>
          <button 
            onClick={() => toast.dismiss(t.id)}
            type="button" className="mg-l-10 mg-b-1 close border-0" data-dismiss="toast" aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body bg-light">
          {msg.subj}
        </div>
      </div>      
      
    </div>
  ),{
    duration: 3000
  })
}