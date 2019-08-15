import React from "react"
import { Helmet } from "react-helmet"
import { string } from "prop-types"

DisplayWidget.propTypes = {
	data: string.isRequired,
}

export default function DisplayWidget(props) {
	const { data } = props
	const dataArray = data.split("</div>")

	const isolateScript = dataArray[dataArray.length - 1]
		.replace('<script type="text/javascript">', "")
		.replace("</script>", "")

	return (
		<div style={{ flex: 1 }}>
			<Helmet
				script={[
					{
						type: "text/javascript",
						innerHTML: isolateScript,
					},
				]}
			/>

			<h2>Resources Widget</h2>

			<div id="resources_calendar_widget" className="styled">
				<div className="loader">Loading...</div>
			</div>
		</div>
	)
}
