import React from 'react';

class Filters extends React.Component {

	constructor(props) {
		super(props);
		this.defaultSort = props.onSort;
	}

	state = {
		selectedItem: 'name'
	};

	handleOnSort = (event) => {
		this.setState({
			selectedItem: event.target.name,
		});
		this.defaultSort(event.target.name);
	}

	render() {
		return (
			<div className="container" data-testid='filters'>
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input" placeholder="Pesquisar" />

						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					<button name="name" onClick={this.handleOnSort} className="filters__item is-selected">
						Nome <i className="fas fa-sort-down" />
					</button>

					<button name="country" onClick={this.handleOnSort} className="filters__item">
						País <i className="fas fa-sort-down" />
					</button>

					<button name="company" onClick={this.handleOnSort} className="filters__item">
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button name="department" onClick={this.handleOnSort} className="filters__item">
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button name="admissionDate" onClick={this.handleOnSort} className="filters__item">
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
