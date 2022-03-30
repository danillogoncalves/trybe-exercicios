import { connect } from 'react-redux';
import './App.css';
import { fetchApiRedditAction } from './redux/actions';

function App(props) {
  const { fetchSubreddit } = props;
  const handleClick = async () => {
    
  }
  return (
    <div className="App">
      <h1>New Project</h1>
      <button
        type='button'
        onClick={
          () => {
            fetchSubreddit('frontend').then(data => console.log(data));
          }
        }
      >
        TESTE!
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  subredditInfo: state.apiRedditReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubreddit: (subreddit) => dispatch(fetchApiRedditAction(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
