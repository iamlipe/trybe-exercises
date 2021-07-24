import React from 'react';
import Pokemon from './Pokemon';
import NextPoke from './NextPoke';
import FilterPoke from './FilterPoke';
import AllFilterPoke from './AllFilterPoke';

class Pokedex extends React.Component {

  constructor(props) {
    super(props)

		this.filterType = this.filterType.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.next = this.next.bind(this);
    this.state = {
      indexPoke: 0,
			typeFilterPoke: this.props.pokemons,
			typePoke: this.props.pokemons
			.map((a) => a.type)
			.filter((elem, index, arr) =>  index === arr.indexOf(elem)), // https://igluonline.com/como-remover-elementos-duplicados-de-uma-array-no-javascript-es6/
		};
	}

	//criar uma função que vai filtrar o data pelo type
	filterType(e) {
		this.setState({
			indexPoke: 0,
			typeFilterPoke: this.props.pokemons.filter((pokemon) => pokemon.type === e.target.className )
		})
	}

	setFilter() {
		this.setState({
			indexPoke: 0,
			typeFilterPoke: this.props.pokemons
		})
	}

	next() {
		this.setState((anterior,  _props) => ({
      indexPoke: anterior.indexPoke >= this.state.typeFilterPoke.length - 1 ? 0 : anterior.indexPoke + 1,
    }))
	}

  render() {
    return (
			<div>
				<div className="pokedex">
					{this.state.typeFilterPoke
					.filter((pokeId) => pokeId.id === this.state.typeFilterPoke[this.state.indexPoke].id)
					.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
				</div>
				<NextPoke next={this.next}/>
				<AllFilterPoke setFilter={this.setFilter}/>
				<div>
					{this.state.typePoke
					.map((poke, index) => <FilterPoke key={ index } type={poke} filterType={this.filterType}/>)}
				</div>
			</div>
    );
  }
}

export default Pokedex;