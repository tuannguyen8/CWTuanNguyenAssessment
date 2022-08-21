import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import BodyStarWars from './BodyStarWars';

const StarWars = () => {
	const navigate = useNavigate();
	return (
		<div className="starwars-container">
			<div className='starwars-navigate'>
				<Button type="primary" onClick={() => navigate('/')}>
					Go to Home Page
				</Button>
				<Button type="primary" onClick={() => navigate('/dogs')}>
					Go to Dog Page
				</Button>
			</div>
			<div className="starwars-contents">
				<BodyStarWars />

			</div>
		</div>
	);
};

export default StarWars;
