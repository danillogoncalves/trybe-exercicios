import { Component } from 'react';
import Loading from '../components/Loading';
import fetchApi from '../helper/fetchApi';

class ReceitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      drinks:[],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const recipes = await fetchApi('http://localhost:3001/recipes');
    const drinks = await fetchApi('http://localhost:3001/drinks');
    this.setState({
      recipes,
      drinks,
      isLoading: false,
    })
  }

  render() {
    const { recipes, drinks, isLoading } = this.state;

    return (
      <div>
        <div>
          {isLoading && <Loading />}
          <div className='card-group'>
            {[...recipes, ...drinks].sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
            .map((recipe) => (
              <div key={`${recipe.id}${recipe.name}`}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ReceitasList;
