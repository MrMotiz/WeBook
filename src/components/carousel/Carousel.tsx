import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

import { ICarouselProps } from '../../components/Card/CardTypes';
import Card from '../Card/Card';

function Carousel(props: ICarouselProps): JSX.Element {
	const date = Date.now();
	const dateBefore = new Date(date);
	dateBefore.setFullYear(dateBefore.getFullYear() - 2);

	const filteredBooks = props.data.filter(
		(item) => item.year >= dateBefore.getFullYear()
	);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: filteredBooks.length > 6 ? 6 : filteredBooks.length,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		initialSlide: 0,
	};

	const StyledCarousel = styled.div`
		width: 70%;
		margin: 0 auto;
		margin-top: 150px;
	`;

	return (
		<StyledCarousel>
			<Slider {...settings}>
				{filteredBooks.map((item) => (
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

export { Carousel };
