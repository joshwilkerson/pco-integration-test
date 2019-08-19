import React from "react"
import Logo from "./logo"
import { NavLink } from "react-router-dom"

export default function Header() {
	return (
		<header className="d-f fd-c jc-sb">
			<Logo />
			<nav className="d-f fd-c fd-r@sm ai-c@sm jc-fs jc-sb@sm">
				<div className="mb-1 mb-0@sm">
					<NavLink to="/" className="mr-1" activeClassName="selected" exact>
						Create New
					</NavLink>
					<NavLink to="/saved" activeClassName="selected">
						My Saved Integrations
					</NavLink>
				</div>
				<div>
					<p className="m-0 c-gray_700">
						Logged in as: <strong>Josh Wilkerson</strong>
					</p>
				</div>
			</nav>
		</header>
	)
}
