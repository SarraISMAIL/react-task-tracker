import Proptypes from 'prop-types'

const Button = ({color, text}) => {
  return <button style={{backgroundColor : color}} className='btn'>{text}</button>
}

Button.defaultProps={
  color: 'steelblue'

}
Button.proptypes={
  text: Proptypes.string
}

export default Button
