import React from 'react'
import paginationStyles from "./Ex08.module.css"
export default function Ex08() {
  return (
    <div className={paginationStyles.backgroup}>
      <ul className={paginationStyles.ul}>
        <li className={paginationStyles.arow}>
          <span className="material-symbols-outlined">keyboard_backspace</span>
          <span>Prev</span>
        </li>
        {/* <li className={paginationStyles.li}>1</li> */}
       
        <li className={paginationStyles.arow}>
          <span>Next</span>
          <span className="material-symbols-outlined">east</span>
        </li>
      </ul>
    </div>
  );
}
