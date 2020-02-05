import React, { MouseEventHandler, useState } from 'react';

interface Props {
  size?: 'small' | 'middle' | 'big',
  onClick: MouseEventHandler,
}

const ButtonAdd = ({ size, onClick }: Props) => {
  return (
    <div
      className={`detail-add detail-add__${size}`}
      onClick={onClick}
    >
      <div className="add-icon"></div>
    </div>
  )
}

export default ButtonAdd;