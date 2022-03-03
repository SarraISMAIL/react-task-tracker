
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

  return (
    <header className='header'>
       <h1>{title}</h1>
      <Button color='green' text='Hello'/>
      <Button color='blue' text='Hello 1'/>
      <Button color='green' text='Hello  2'/>
    </header>
  )
}

Header.defaultProps = {
    title : "Task Tracker",
}

Header.PropTypes={
    title : PropTypes.string.isRequired,
}
//  CS in JS
//const headingstyle={color:'red',
 //backgroundColor:'black'
//}
export default Header