import React, { Fragment } from 'react';
import GetCarousel from './GetCarousel';
import NavBar from '../../auth/NavBar';
import './Landing.css';
import Me from './Me.jpg';
import {
	FaInstagram,
	FaTwitter,
	FaFacebook,
	FaReact,
	FaHeart,
	FaGithub
} from 'react-icons/fa';

const Landing = () => {
	return (
		<Fragment>
			<NavBar />
			<h3 className='marquee'>
				<span>Welcome to Quick2Link!</span>
			</h3>
			<br />
			<GetCarousel />
			<br />
			<div className='container'>
				<h4>Why to use Quick2Link?</h4>
				<ul className='textforlarge'>
					<li>Saves your time! Have all of them in one place.</li>
					<li>
						Forget Bookmarks! Bookmarks can eat up your memory hence making
						things slow down. You can add them here and we will remember them.
					</li>
				</ul>
				<br />
				{/* &emsp; */}
				<br />
				<div className='developer'>
				<h3 style={{ textAlign: 'center' }}>About the Developer</h3>
				<img src={Me} alt='pic' className='MyPhoto' />
				<ul className='textforlarge'>
					<li>Crazy for Cricket, Coding, Chess.</li>
					<li>Proudly an Indian.</li>
					<li>
						In <FaHeart size='1em' color='DarkRed' /> with &nbsp;
						<FaReact size='1em' color='blue' />
					</li>
				</ul>
				<h3>Find me on : </h3>
				<a href='https://github.com/rohitmi0023'>
					<FaGithub size='2em' color='Brown' />
				</a>
				&emsp; &ensp;
				<a href='https://www.instagram.com/rohitmi0023/'>
					<FaInstagram size='2em' color='DarkRed' />
				</a>
				&emsp; &ensp;
				<a href='https://twitter.com/RohitMi0023'>
					<FaTwitter size='2em' color='Blue' />
				</a>
				&emsp; &ensp;
				<a href='https://www.facebook.com/profile.php?id=100004934191319'>
					<FaFacebook size='2em' color='#3a5896' />
				</a>
				</div>
			</div>
			<br />
			<br />
			<br />
		</Fragment>
	);
};

export default Landing;
