import React, { MouseEventHandler } from 'react';

interface link {
  active: boolean,
  children: any,
  onClick: MouseEventHandler,
}

const Link = ({ active, children, onClick }: link) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  )
}

export default Link;