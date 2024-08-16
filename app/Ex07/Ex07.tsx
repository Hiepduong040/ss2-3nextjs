import React from 'react'
import buttonStyles from "./Ex07.module.css"
export default function Ex07() {
  return (
    <div className={buttonStyles.container}>
      <button className={buttonStyles.success}>Success</button>
      <button className={buttonStyles.warning}>Warning</button>
      <button className={buttonStyles.danger}>Danger</button>
      <button className={buttonStyles.primary}>Primary</button>
    </div>
  );
}
