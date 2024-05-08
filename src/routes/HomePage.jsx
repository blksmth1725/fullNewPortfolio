import React from "react";
import "../css/css-routes/homePage.css";
import { CHRIS_JSON } from "../utils/constants";

function HomePage() {
	const {
		Email,
		Phone,
		Location,
		GitHub,
		LinkedIn,
		Intro,
		Work,
		Certifications,
	} = CHRIS_JSON;
	const formatIntro = (str) => {
		let formatted = str
			.split(" ")
			.map((el) => {
				return el[el.length - 1] === "." ? (el += "\n") : el;
			})
			.join(" ");
		console.log(formatted);
		return formatted;
	};

	return (
		<>
			<div className="hp">
				<div className="hp-section-one">
					<div className="contact-card">
						<div className="card-title">Contact</div>
						<div>E-mail: {Email}</div>
						<div>Phone: {Phone}</div>
						<div>Location: {Location}</div>
						<div>GitHub: {GitHub}</div>
						<div>LinkedIn: {LinkedIn}</div>
					</div>
					<div className="desc-card">
						<div className="card-title">
							Software Engineer: Front-End Developer
						</div>
						<div className="intro-card">{formatIntro(Intro)}</div>
					</div>
				</div>
				<div className="hp-section-two">
					<div className="work-section">
						<div className="card-title">Work Experience</div>
						<div className="work-container">
							{Work.map(
								({ Position, Company, Location, BriefDesc, BulletPoints }) => {
									return (
										<div className="job-card">
											<div>Position: {Position}</div>
											<div>Company: {Company}</div>
											<div>Location: {Location}</div>
											<div>Location: {BriefDesc}</div>
											<div className="bullet-points">
												{BulletPoints.map((el) => {
													return <div>{el}</div>;
												})}
											</div>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
				{/*
				<div>
					<h4>Work Experience</h4>
					<div>
						{Work.map(
							({ Position, Company, Location, BriefDesc, BulletPoints }) => {
								return (
									<div className="job-card">
										<div>Position: {Position}</div>
										<div>Company: {Company}</div>
										<div>Location: {Location}</div>
										<div>Location: {BriefDesc}</div>
										<div className="bullet-points">
											{BulletPoints.map((el) => {
												return <div>{el}</div>;
											})}
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div>
					<h4>Education + Certifications</h4>
					<div>
						{Certifications.map(
							({
								Title,
								Institution,
								State,
								DateStart,
								DateEnd,
								Description,
								Technologies,
							}) => {
								return (
									<div className="cert-card">
										<div>{Title}</div>
										<div>{Institution}</div>
										<div>{State}</div>
										{Description ? <div>{Description}</div> : ""}
										<div>
											<div>{DateStart}</div>
											<div>{DateEnd}</div>
										</div>
										<div className="bullet-points">
											{Technologies.map((el) => {
												return <div>{el}</div>;
											})}
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div>
					<h4>Languages</h4>
        </div>
          */}
			</div>
		</>
	);
}

export default HomePage;
