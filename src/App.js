import React from 'react';
import './App.css';
import GridView from './components/GridView';
import ListView from './components/ListView';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewType: 'list'
		}
	}

	renderView(){
		return this.state.viewType === "list" ? <ListView /> : <GridView />;
	}

	render() {
		return (
			<>
				<div className="top-flex">
					<button
						className="fadeInDown"
						onClick={() => {
							this.setState({
								viewType: this.state.viewType === "grid" ? "list" : "grid",
							});
						}}
					>
						Change view
					</button>
				</div>
				<div className="container">
					<div className="view">{this.renderView()}</div>
				</div>
			</>
		);
	}
}

export default App;
