import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import dogs from '../../APIs/dogs';
import BodyDogsPage from './BodyDogsPage';

const Dogs = () =>{
    const navigate = useNavigate();
    return (
        <div className='dog-container'>
            <BodyDogsPage></BodyDogsPage>
            <h1> Welcome Dog Page</h1>
            <Button type="primary" onClick={() => navigate('/')}>
				Go to Home
			</Button>
			<Button type="primary" onClick={() => navigate('/starwars')}>
				Go to Star Wars
			</Button>
            

        </div>
    )
}

export default Dogs;