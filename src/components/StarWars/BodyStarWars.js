import React, { useState, useEffect } from 'react';
import starwars from '../../APIs/starwars';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import $ from 'jquery';

const BodyStarWars = () => {
	const [characters, setCharacters] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		//only fetch data when there is no charactersData in local storage
		if (localStorage.getItem('charactersData')) {
			console.log('storage');
			setCharacters(JSON.parse(localStorage.getItem('charactersData')));
		} else {
			console.log('fetching');
			starwars.getPeople().then((response) => {
				//adding a status field for each character for doing clicking heart function in later
				response.forEach((element) => {
					element.status = false;
				});
				setCharacters(response);
			});
		}
	}, []);

	//watching the state of character, update the localstorage whenever there is a change of characters
	useEffect(() => {
		localStorage.setItem('charactersData', JSON.stringify(characters));
		//localStorage.clear();
	}, [characters]);

	//sort array of object by the key
	const handleSortData = () => {
		if (localStorage.getItem('charactersData')) {
			//get data from local storage
			const response = JSON.parse(localStorage.getItem('charactersData'));

			//sort data in local storage
			response.sort((a, b) => {
				if (a.name > b.name) {
					return 1;
				} else {
					return -1;
				}
			});
			setCharacters(response);
		} else {
			starwars.getPeople().then((response) => {
				//sort data by the name of characters
				response.sort((a, b) => {
					if (a.name > b.name) {
						return 1;
					} else {
						return -1;
					}
				});

				setCharacters(response);
			});
		}
	};

	//reset the data
	const handleResetData = () => {
		starwars.getPeople().then((response) => {
			//console.log('response Reset Data', response);
			if (window.confirm('Do you really want to reset characters?') === true) {
				response.forEach((element) => {
					element.status = false;
				});
				setCharacters(response);
				localStorage.clear();
			}
		});
	};

	//handle the change in the input field
	const handleChange = (event) => {
		//console.log(event.target.value);
		setInput(event.target.value);
	};

	//search a character when the user press search button
	const handleSubmit = (e) => {
		e.preventDefault();

		//Only search the character when the user enter letter(s)
		if (input.trim() !== '') {
			const newCharaters = characters.filter((val) =>
				val.name.toLowerCase().includes(input.toLowerCase())
			);
			console.log('new character', newCharaters);
			console.log('character', characters);
			if (!newCharaters) {
				setCharacters(characters);
			} else {
				setCharacters(newCharaters);
			}
			setInput('');
		}
	};

	//delete an character
	const handleClickDelete = (index) => {
		//alert(index);
		console.log("I'm teting", characters[index].status);
		if (characters[index].status === true) {
			if (window.confirm('Do you really want to delete your favorite characters?') === true) {
				setCharacters([
					...characters.slice(0, index),
					...characters.slice(index + 1),
				]);
			}
		} else {
			setCharacters([
				...characters.slice(0, index),
				...characters.slice(index + 1),
			]);
		}
	};

	//change the status of a object when user click the heart icon
	const handleClickState = (index) => {
		//console.log('hello status', characters[index].status);

		if (characters[index].status === false) {
			setCharacters([
				...characters.slice(0, index),
				{
					...characters[index],
					status: true,
				},
				...characters.slice(index + 1),
			]);
		} else {
			setCharacters([
				...characters.slice(0, index),
				{
					...characters[index],
					status: false,
				},
				...characters.slice(index + 1),
			]);
		}
	};

	//shake the button when click the add to cart button

	$('.sort-btn').on('click', function (e) {
		setTimeout(function () {
			$('.sort-btn').addClass('animate__animated animate__headShake');
		}, 500);
		$('.sort-btn').removeClass('animate__animated animate__headShake');
	});

	$('.reset-btn').on('click', function (e) {
		setTimeout(function () {
			$('.reset-btn').addClass('animate__animated animate__headShake');
		}, 500);
		$('.reset-btn').removeClass('animate__animated animate__headShake');
	});

	return (
		<div className="div-bodyStarwars-contents">
			<div className="search-bar">
				<form onSubmit={handleSubmit}>
					<input onChange={handleChange} value={input} type="text" />
					<button>Search </button>
				</form>
			</div>
			<div className="functional-btn">
				<Button className="sort-btn" onClick={handleSortData}>
					{' '}
					Click to Sort Characters{' '}
				</Button>
				<Button className="reset-btn" onClick={handleResetData}>
					{' '}
					Click to Reset Characters{' '}
				</Button>
			</div>

			<div className="render-characters">
				{characters.map((item, index) => {
					return (
						<div
							className="div-starwars"
							key={index}
							style={{ margin: 10, width: 200 }}
						>
							<div>
								<span className="span-info">Name: </span>
								<span>{item.name}</span>{' '}
							</div>
							<div>
								<span className="span-info">Height: </span>
								<span>{item.height}</span>{' '}
							</div>
							<div>
								<span className="span-info">Mass: </span>
								<span> {item.mass}</span>
							</div>
							<div>
								<span className="span-info">Hair: </span>
								<span>{item.hair_color}</span>
							</div>
							<div className="starwars-btn-heart">
								<div
									onClick={() => handleClickState(index)}
									className={
										item.status
											? 'starwars-heart favorite'
											: 'starwars-heart not-done'
									}
								>
									<HeartOutlined />
								</div>
								<Button onClick={() => handleClickDelete(index)}>
									Delete Character
								</Button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BodyStarWars;
