import React from "react"
import { string } from "prop-types"
import AppIcon from "./app_icon"
import { testData } from "./test_data"

export default class DisplayWidget extends React.Component {
	static propTypes = {
		name: string.isRequired,
		data: string.isRequired,
	}

	static defaultProps = {
		name: "",
		data: "",
	}

	state = {
		hasInheritedProps: false,
	}

	isolateScript(data) {
		const dataArray = data.split('"')
		const script = document.createElement("script")
		script.src = dataArray[dataArray.length - 4]
		script.async = true
		document.body.appendChild(script)
	}

	componentDidMount() {
		if (this.props.data) {
			this.isolateScript(this.props.data)
			this.setState({ hasInheritedProps: true })
		} else {
			this.isolateScript(testData[2].data)
		}
	}

	render() {
		const { name } = this.props

		return (
			<div className="integration-details">
				<div className="d-f ai-c jc-fs mb-2">
					<div className="p-r mr-4p" style={{ top: 3 }}>
						<AppIcon app="resources" />
					</div>

					<h2>{this.state.hasInheritedProps ? name : testData[2].name}</h2>
				</div>

				<div id="resources_calendar_widget" className="styled">
					<div className="loader">Loading...</div>
				</div>
			</div>
		)
	}
}
