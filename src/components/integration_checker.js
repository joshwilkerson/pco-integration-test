import React from "react"
import DisplayEmbedForm from "./display_embed_form"
import DisplayWidget from "./display_widget"

export default class IntegrationChecker extends React.Component {
	state = {
		data: "",
		app: "",
		error: false,
	}

	render() {
		const { data, app, error } = this.state
		const dataArray = data.split("/")

		const handleInputChange = e => {
			this.setState({ data: e.target.value })
		}

		const handleClear = e => {
			e.preventDefault()
			this.setState({ app: "", data: "", error: false })
		}

		const setDataType = () => {
			if (dataArray[dataArray.length - 1].includes("giving")) {
				this.setState({ app: "giving", error: false })
			} else if (dataArray[dataArray.length - 3] === "people") {
				this.setState({ app: "people", error: false })
			} else if (dataArray[dataArray.length - 4].includes("resources")) {
				this.setState({ app: "resources", error: false })
			} else {
				this.setState({ app: "", error: true })
			}
		}

		return (
			<div style={{ display: "flex" }}>
				<div style={{ marginRight: 16 }}>
					<textarea
						rows="8"
						cols="30"
						value={data}
						onChange={handleInputChange}
					/>
					<br />
					<button
						onClick={setDataType}
						disabled={!data}
						style={{ marginTop: 10 }}
					>
						Submit
					</button>
					<button
						style={{ marginLeft: 8 }}
						onClick={handleClear}
						disabled={!data}
					>
						Clear
					</button>

					{error && (
						<div
							style={{
								marginTop: 10,
								padding: 8,
								border: "1px solid red",
								color: "red",
								display: "inline-block",
							}}
						>
							invalid format
						</div>
					)}
				</div>

				{(app === "giving" || app === "people") && (
					<DisplayEmbedForm data={data} app={app} />
				)}

				{app === "resources" && <DisplayWidget data={data} />}
			</div>
		)
	}
}
