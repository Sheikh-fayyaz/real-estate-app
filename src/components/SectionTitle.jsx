import React from 'react'

function SectionTitle({contentLight, contentBold}) {
  return (
    <h2 className='section-title'><span className='fw-normal'>{contentLight}</span> <span className='fw-semibold'>{contentBold}</span></h2>
  )
}

export default SectionTitle