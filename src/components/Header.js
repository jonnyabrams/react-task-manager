import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Manager'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


// for inline CSS - do style={headingStyle} in header tag

// const headingStyle = {
//   color: 'yellow', 
//   backgroundColor: 'blue'
// }

export default Header