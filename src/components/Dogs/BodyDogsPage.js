import React, { useState, useEffect } from 'react';
import dogs from '../../APIs/dogs';
import $ from 'jquery';
import ReactPaginate from 'react-paginate';

const BodyDogsPage = () => {
	const [dogPet, setDogPet] = useState([
		'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
		'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
		'https://images.dog.ceo/breeds/akita/Akina_Inu_in_Riga_1.jpg',
		'https://images.dog.ceo/breeds/akita/Akita_Dog.jpg',
		'https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg',
		'https://images.dog.ceo/breeds/akita/Akita_hiking_in_Shpella_e_Pellumbasit.jpg',
		'https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg',
		'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
		'https://images.dog.ceo/breeds/akita/Japaneseakita.jpg',
	]);
	const [breeds, setBreeds] = useState([]);

	const [pageNumber, setPageNumber] = useState(0);
	const itemPerPage = 8;
	const pageVisited = pageNumber * itemPerPage;
	const pageCount = Math.ceil(dogPet.length / itemPerPage);

	const displayItems = dogPet
		.slice(pageVisited, pageVisited + itemPerPage)
		.map((aPet) => {
			return (
				<div className="aPet">
					<img key={Date.now()} src={aPet} alt="a pet"></img>
				</div>
			);
		});

	useEffect(() => {

		//fetching all breeds of dogs
		dogs.getAllBreeds().then((response) => {
			//console.log('breeds', response);
			//console.log('hello dogs');
			setBreeds(response);
		});

		//select breeds
		$('.dog-breeds').on('click', function () {
			//alert("testing message")
			$('.list').slideToggle();
		});

		//handle click li - select a specific breed
		$(document).on('click', '.list li', function () {
			//$('.list li').on('click', function () {
			const val = $(this).text();
			$('.dog-breeds').text(val);
			$('.list').fadeOut();
		});

		//fetching dogs by breed
		$('.fetch-btn').on('click', function (e) {
			//console.log("hello");
			e.preventDefault();

			//reset dog-area to remove all last images for the coming images
			setDogPet([]);

			//get the value of breed
			//original breed words are all lowercase, so need to lowercase string before fetching
			const breed = $('.dog-breeds').text().toLowerCase();

			//passing kind of breed to api_url, so to be able fetching data
			//const api_url = `https://dog.ceo/api/breed/${breed}/images/random`;
			const api_url = `https://dog.ceo/api/breed/${breed}/images`;
			$.get(api_url, (data) => {
				if (data.status === 'success') {
					//console.log('fetchfetchdata', data.message);
					setDogPet(data.message);
				}
			});
		});
	}, []);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<div className="dog-content">
			<div className="input-group">
				<div className="dog-list">
					<div className="dog-breeds">Akita</div>
					<ul className="list">
						{
							//console.log("current", Object.keys(breeds))
							Object.keys(breeds).forEach((val) => {
								//capitalize the first letter of string
								const capitalizeFirstLetter = val.charAt(0).toUpperCase() + val.slice(1);
								//console.log("valval", capitalizeFirstLetter);
								$('.list').append(`<li>${capitalizeFirstLetter}</li>`);
							})
						}
					</ul>
				</div>
				
				<div className='div-fetch-btn'>
					<button className="fetch-btn">Fetch</button>
				</div>
				
			</div>
			<div>
				<ReactPaginate
					previousLabel={'Previous'}
					nextLabel={'Next'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'paginationBttns'}
					activeClassName={'paginationActice'}
				/>
			</div>
			<div className="dog-area">
				{displayItems}
			</div>
		</div>
	);
};

export default BodyDogsPage;

//testing line 1
