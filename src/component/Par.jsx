import React from 'react'

export const Par = () => {
  const nameref=useref(null)
  const emailref=useref(null)
  constdisplsyref=useref(null)



  function handlesubmit(e) {
    e.preventDefault()
    const name=nameref.current.value
    const email=emailref.current.value

    nameref.current.value='';
    email.current.value=''
    
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input type="text"  ref={nameref} />
      <input type="text"  ref={nameemail} />
      <button type="submit" > </button>
      <div ref={displayref}>
        
      </div>
      </form>

    </div>
  )
}
