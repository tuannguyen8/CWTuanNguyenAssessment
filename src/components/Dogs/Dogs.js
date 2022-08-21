import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import dogs from '../../APIs/dogs';
import BodyDogsPage from './BodyDogsPage';

const Dogs = () => {
	const navigate = useNavigate();
	return (
		<div className="dog-container">
			<div className="dogs-navigate">
				<div className="nav-bounder">
					<div className="nav-div-title">
						<h1> The World of Dogs</h1>
					</div>
					<div className="nav-div-btn">
						<Button type="primary" onClick={() => navigate('/')}>
							Go to Home
						</Button>
						<Button type="primary" onClick={() => navigate('/starwars')}>
							Go to Star Wars
						</Button>
					</div>
				</div>
			</div>

			<div className="dog-body-contents">
				<BodyDogsPage></BodyDogsPage>
			</div>
		</div>
	);
};

export default Dogs;
