const CheckIconSvg = (props) => {
  return (
    <svg className='CheckIconSvg' height='8.94' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4.00001 7.78L1.22001 5L0.273346 5.94L4.00001 9.66667L12 1.66667L11.06 0.726667L4.00001 7.78Z' fill={props.color || 'black'} />
    </svg>

  )
}

export default CheckIconSvg
