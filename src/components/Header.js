import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, showAddTask, onShowAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? 'red' : 'green'}
        text={showAddTask ? 'Close' : 'Add'}
        onClick={onShowAddTask}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Task Tracker',
};

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
