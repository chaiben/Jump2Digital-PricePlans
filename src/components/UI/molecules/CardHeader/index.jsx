import H2 from '../../atoms/H2'
import IconImage from '../../atoms/IconImage'
import Label from '../../atoms/Label'

const CardHeader = (props) => {
  return (
    <div className='CardHeader'>
      <IconImage src={`${props.alias}.png`} alt={`${props.name} plan icon`} />
      <Label>{props.name}</Label>
      <H2>{props.price}</H2>
      <Label className='SubLabel'>per month</Label>
    </div>
  )
}

export default CardHeader
