import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import welcome1 from '../../img/letter1.PNG';
import welcome2 from '../../img/letter2.PNG';
import welcome3 from '../../img/letter3.PNG';
import welcome4 from '../../img/letter4.PNG';
import welcome5 from '../../img/letter5.PNG';
import welcome6 from '../../img/letter6.PNG';
import welcome7 from '../../img/letter7.PNG';


import 'animate.css';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="home-container">
			<div className="div-content">
				<h1 className='animate__slow animate__animated animate__backInDown'>WELCOME TO HOME PAGE</h1>
				<div className="div-home-btn">
					<Button
						className="animate__repeat-1 animate__slow home-btn-1 animate__animated animate__backInRight"
						type="primary"
						onClick={() => navigate('/starwars')}
					>
						Go to Star Wars
					</Button>
					<Button
						className="animate__repeat-1 animate__slow home-btn-2 animate__animated animate__backInLeft"
						type="primary"
						onClick={() => navigate('/dogs')}
					>
						Go to Dog Page
					</Button>
				</div>
			</div>
			<div className='div-welcome'>
				<img src={welcome1} className="welcome animate__slow animate__animated animate__backInLeft animate__delay-4s" alt="welcome"></img>
                <img src={welcome2} className="welcome animate__slow animate__animated animate__bounceInDown animate__delay-5s" alt="welcome"></img>
                <img src={welcome3} className="welcome animate__slow animate__animated animate__backInLeft animate__delay-3s" alt="welcome"></img>
                <img src={welcome4} className="welcome animate__slow animate__animated animate__bounceInDown animate__delay-5s" alt="welcome"></img>
                <img src={welcome5} className="welcome animate__slow animate__animated animate__backInLeft animate__delay-2s" alt="welcome"></img>
                <img src={welcome6} className="welcome animate__slow animate__animated animate__bounceInDown animate__delay-5s" alt="welcome"></img>
                <img src={welcome7} className="welcome animate__slow animate__animated animate__backInLeft animate__delay-1s" alt="welcome"></img>
              

			</div>
		</div>
	);
};

export default Home;
