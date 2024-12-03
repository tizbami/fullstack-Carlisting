import React from 'react'

const BButton = ({bgColor, children}) => {
  const styles = {
    backgroundColor: bgColor || 'green',
    color: 'white',
    padding: "10px 20px",
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px'

  }
  return (
    <button style={styles}>{children}</button>
  )
}

export default BButton