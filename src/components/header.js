import React from "react"
import Logo from "./logo"
import { NavLink } from "react-router-dom"

export default function Header() {
	return (
		<header className="d-f fd-c jc-sb">
			<Logo />
			<nav className="d-f fd-c fd-r@sm ai-c@sm jc-fs jc-sb@sm">
				<div className="d-if jc-c jc-fs@sm my-1 pb-1 my-0@sm p-0@sm">
					<NavLink to="/" className="mr-1" activeClassName="selected" exact>
						Create New
					</NavLink>
					<NavLink to="/saved" activeClassName="selected">
						My Saved Integrations
					</NavLink>
				</div>

				<div className="d-if jc-c jc-fs@sm mb-1 m-0@sm">
					<p className="m-0 pr-4p c-gray_500">
						Logged in as: <strong className="c-white">Josh Wilkerson</strong>
					</p>
				</div>
			</nav>
		</header>
	)
}
