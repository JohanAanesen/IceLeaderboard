import { ReactNode } from 'react'

import './WindowBox.css'

export default function NoBorderWindowBox({
  children,
  title,
  className,
}: {
  children: ReactNode
  title: string
  className?: string
}) {
  return (
    <div className={`global-item ${className ?? ''} no-border-foot `}>
      <div className='window-header' />
      <div className='window-title'>
        <h2>
          <span>{title}</span>
          <br />
          <span>69</span>
        </h2>
      </div>
      <div className='inner-wrapper no-border'>
        <div>{children}</div>
      </div>
    </div>
  )
}
