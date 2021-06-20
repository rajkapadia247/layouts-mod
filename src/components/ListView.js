import React, { Component } from "react";
import { getDataForListView } from "../utils/mainUtils";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = { itemData: {}, uniqueFiles: [] };
    }

    componentDidMount() {
        const {itemData, uniqueFiles} = getDataForListView();
        this.setState({ itemData, uniqueFiles });
    }

    render() { 
        return (
					<div className="list-main">
						<table>
							<thead>
								<tr>
									<th>Symbols</th>
									{this.state.uniqueFiles.map((fileName) => (
										<th key={fileName}>{fileName}</th>
									))}
									<th>Count of all items</th>
								</tr>
								{Object.entries(this.state.itemData).map((item) => (
									<tr key={item[0]}>
										<td>{item[0]}</td>
										{this.state.uniqueFiles.map((fileName) => (
											<td key={fileName}>{item[1][fileName] ? item[1][fileName] : 0}</td>
										))}
										<td>
											{Object.entries(item[1]).reduce(
												(total, el) => total + el[1],
												0
											)}
										</td>
									</tr>
								))}
							</thead>
						</table>
					</div>
				);
    }
}

export default ListView;