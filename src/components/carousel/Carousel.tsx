import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import * as bookService from '../../services/bookService';
import Card from './components/Card';
import { IBook } from './components/CardTypes';

function Carousel(): JSX.Element {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		initialSlide: 0,
	};

	const [books, setBooks] = useState<IBook[]>([]);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	async function getAllBooks(): Promise<void> {
		try {
			const response = await bookService.getAllBooks();

			setBooks([...response]);
		} catch (error) {
			handleError(error);
		}
	}

	useEffect(() => {
		void getAllBooks();
	}, []);

	return (
		<StyledCarousel>
			<Slider {...settings}>
				{books.map((item) => (
					<Card 
						key={item.id}
						title={item.title}
						book_cover={item.book_cover}
						year={item.year}
						id={item.id}
					></Card>
				))}
			</Slider>
		</StyledCarousel>
	);
}

const StyledCarousel = styled.div`
	margin: 0% 10%;
`;

export { Carousel };
