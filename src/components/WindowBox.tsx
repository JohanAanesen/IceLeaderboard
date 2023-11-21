import { ReactNode } from 'react'

import './WindowBox.css'

export default function WindowBox({
  children,
  title,
  className,
}: {
  children: ReactNode
  title: string
  className?: string
}) {
  return (
    <div className={`global-item ${className ?? ''} `}>
      <div className='window-header'>
        <span className='window-header-spacer'>
          <i />
          <i />
          <i />
        </span>
        <h2>{title}</h2>
      </div>
      <div className='inner-wrapper'>
        <div className='inner-content'>{children}</div>
      </div>
    </div>
  )
}
