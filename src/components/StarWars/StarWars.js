import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import BodyStarWars from './BodyStarWars';

const StarWars = () => {
	const navigate = useNavigate();
	return (
		<div className="starwars-container">
			<div className="starwars-navigate">
				<div className='nav-bounder'>
					<div className="nav-div-title">
						<h1> Star Wars Characters</h1>
					</div>
					<div className="nav-div-btn">
						<Button type="primary" onClick={() => navigate('/')}>
							Go to Home Page
						</Button>
						<Button type="primary" onClick={() => navigate('/dogs')}>
							Go to Dog Page
						</Button>
					</div>
				</div>
			</div>
			<div className="starwars-contents">
				<BodyStarWars />
			</div>
		</div>
	);
};

export default StarWars;
