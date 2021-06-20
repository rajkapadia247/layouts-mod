import React, { Component } from "react";
import { getDataForGridView } from "../utils/mainUtils";

class GridView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			total: 0,
		};
	}

	componentDidMount() {
		const items = getDataForGridView();
		const total = Object.entries(items).reduce(
			(total, item) => total + item[1],
			0
		);
		this.setState({
			items,
			total,
		});
	}

	getItemWidth(itemCount) {
		return `${(itemCount / this.state.total) * 100}%`;
	}
	render() {
		return (
			<div className="grid-main fadeInDown delay">
				{Object.entries(this.state.items).map((item) => (
					<div
						key={item[0]}
						className="grid-item"
						style={{ width: this.getItemWidth(item[1]) }}
					>
						{item[0]}
					</div>
				))}
			</div>
		);
	}
}

export default GridView;
