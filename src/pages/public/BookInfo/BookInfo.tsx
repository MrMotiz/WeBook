import { Carousel } from '../../../components/carousel';
import { BookInfoContainter } from './BookContainer';
import { Form } from './Form';

function BookInfo(): JSX.Element {
	return (
		<>
			<BookInfoContainter />
			<Carousel />
			<Form />
			{/* <Footer/> */}
		</>
	);
}

export { BookInfo };
