import React from 'react';
import '../App.css';

export default function Month(props) {
	return (
		<div className="MonthContainer">
			<div className="Top">
				<div>{props.dividends.length} dividend{(props.dividends.length == 0 || props.dividends.length > 1) ? "s" : ""}</div>
			</div>
			<div className="Middle">
			{props.dividends.length > 0 ? (
				<div className="LogoContainer">
					{props.dividends.map(item => {
						return <img src={item.logo} alt={item.companyName} className="DashboardLogo" />
					})}
				</div>
			) : (
				<div className="NoDividends">You've got no dividend payouts this month</div>
			)}
			</div>
			<div className="Bottom">
				<p className="Title">{props.monthName.toUpperCase()}</p>
			</div>
		</div>
	);
}