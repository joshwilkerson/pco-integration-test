import React, { Fragment } from "react"
import { string } from "prop-types"

import GivingBadge from "../assets/svg/giving.svg"
import PeopleBadge from "../assets/svg/people.svg"
import ResourcesBadge from "../assets/svg/resources.svg"

const AppIcon = props => {
	return (
		<Fragment>
			{props.app === "giving" && <GivingBadge />}
			{props.app === "people" && <PeopleBadge />}
			{props.app === "resources" && <ResourcesBadge />}
		</Fragment>
	)
}

AppIcon.propTypes = {
	app: string,
}

export default AppIcon
