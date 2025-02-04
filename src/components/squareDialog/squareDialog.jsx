import React from 'react'
import './squareDialog.css'

function SquareDialog({children, border, colortext,bg}) {

    const styles = {
      border: `3px solid ${border||'#99bcdd'}`,
      background: bg,
      color : colortext||'#918c92',
    }

    return (
    <>
        <div className="card-text" style={styles}>
          {children}
          <button className='button-transparent b-left'>.</button>
          <button className='button-transparent b-right'>.</button>
        </div>
    </>
  )
}

export default SquareDialog