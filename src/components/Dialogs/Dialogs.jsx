import React from 'react'
import c from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogItems}>
        <div className={`${c.dialog} ${c.active}`}>Dima</div>
        <div className={c.dialog}>Sasha</div>
        <div className={c.dialog}>Sveta</div>
        <div className={c.dialog}>Vikor</div>
        <div className={c.dialog}>Valera</div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Hi</div>
        <div className={c.message}>Text 1</div>
        <div className={c.message}>Text 2</div>
        <div className={c.message}>Text 3</div>
      </div>
    </div>
  )
}

export default Dialogs
