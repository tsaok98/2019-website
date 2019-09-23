import React from 'react';
// import { Link } from 'gatsby';

import '../components/layout.css';
import styled from 'styled-components';


import SEO from '../components/seo';

import Welcome from '../components/welcome';
import FAQ from '../components/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';
import BGI from '../images/Website Layout.png';

let Container = styled.div `
	width: 100%;
	background-size: cover;
	height: auto;
	background-image: url(${'https://shared.benc.io/screencaps/2019/09/Website_Layout.opt.png'});
	overflow: scroll;
`;

const IndexPage = () => (
	<Container>
		<SEO title="" />
		{
			// insert VH logo
		}
		<h1>VandyHacks VI</h1>
		<h3>Nov 1-3, 2019 • Nashville, TN </h3>

		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
		<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
	</Container>
);

export default IndexPage;
