import axios from 'axios';

//documentation @https://docs.thecatapi.com/
//feel free to add more functions!

const dogs = {
	getAllBreeds: async () => {
		try {
			const response = await axios.get('https://dog.ceo/api/breeds/list/all');
			/* console.log("result data", response.data) */
            return response.data.message;
		} catch (error) {
			return error;
		}
	},
    getPetByBreed: async (breed) => {
		try {
			const response = await axios.get('https://dog.ceo/api/breed/${breed}/images/random');
            //const response = await axios.get('https://dog.ceo/api/breed/${breed}/images/');
			/* console.log("result data", response.data) */
            return response.data.message;
		} catch (error) {
			return error;
		}
	},

};

export default dogs;
