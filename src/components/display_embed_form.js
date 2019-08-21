import React from "react"
import { Helmet } from "react-helmet"
import { string, object } from "prop-types"

import { testData } from "./test_data"
import AppIcon from "./app_icon"

export default class DisplayEmbedForm extends React.Component {
	static propTypes = {
		data: string.isRequired,
		app: string.isRequired,
		name: string.isRequired,
		location: object,
	}

	static defaultProps = {
		name: "",
		app: "",
		data: "",
	}

	constructor(props) {
		super(props)

		this.state = {
			hasInheritedProps: true,
			app: "",
		}
	}

	componentDidMount() {
		const { app } = this.props.location.state || this.props.app
		this.setState({
			app: app,
		})

		if (this.props.name === "") {
			this.setState({ hasInheritedProps: false })
		}
	}

	render() {
		const { name, app, data } = this.props
		const script = `https://js.churchcenter.com/modal/v1`
		const url = data.replace(/\s/g, "")
		const testDataIndex = this.state.app === "giving" ? 0 : 1

		return (
			<div className="integration-details d-f fd-c fd-r@md jc-sb@md ai-c@md">
				<Helmet
					script={[
						{
							type: "text/javascript",
							src: script,
						},
					]}
				/>
				<div className="d-f ai-c jc-fs f-1">
					<AppIcon app={this.state.hasInheritedProps ? app : this.state.app} />
					<h2>
						{this.state.hasInheritedProps ? name : testData[testDataIndex].name}
					</h2>
				</div>

				<div className="d-b d-ib@md mt-3 mt-0@md">
					<a
						href={
							this.state.hasInheritedProps ? url : testData[testDataIndex].data
						}
						data-open-in-church-center-modal="true"
						className="btn btn--secondary btn--sm mr-2"
					>
						Open modal
					</a>
					<a
						href={
							this.state.hasInheritedProps ? url : testData[testDataIndex].data
						}
						rel="noopener noreferrer"
						target="_blank"
						className="btn btn--secondary btn--sm"
					>
						Open new tab
					</a>
				</div>
			</div>
		)
	}
}
