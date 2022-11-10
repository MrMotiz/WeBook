import { useContext, useState } from 'react';
import styled from 'styled-components';

import { BooksContext } from '../../contexts';
import * as bookService from '../../services/bookService';
import { BookModal } from '../BookModal';
import { Card } from '../Card';
import { IBook, IBookGridProps, ICustomClickEvent } from './BooksGridTypes';
import {
	ButtonContainer,
	CardContainer,
	DeleteButton,
	EditButton,
} from './styles';

const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(6, 1fr);
	width: 80%;
	margin: 0 auto;
	gap: 10px;
	margin-top: 200px;
`;

function BooksGrid(props: IBookGridProps): JSX.Element {
	const { books, deleteBook } = useContext(BooksContext);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [editBook, setEditBook] = useState({} as IBook);

	async function getBookById(bookId: number): Promise<void> {
		const book = await bookService.getBookById(bookId);

		setEditBook(book);

		setIsOpen(true);
	}

	async function removeBook(
		event: ICustomClickEvent,
		bookId: number
	): Promise<void> {
		event.preventDefault();

		await deleteBook(bookId);
	}

	function handleClickEditBookButton(bookId: number): void {
		void getBookById(bookId);
	}

	function handleClickDeleteBookButton(
		event: ICustomClickEvent,
		bookId: number
	): void {
		void removeBook(event, bookId);
	}

	return (
		<>
			<Grid>
				{books
					.filter((item) =>
						props.userId ? item.user.id === props.userId : item
					)
					.map((item) => (
						<CardContainer key={item.id}>
							<Card
								title={item.title}
								book_cover={item.book_cover}
								year={item.year}
								id={item.id}
							></Card>
							{props.userId ? (
								<ButtonContainer>
									<EditButton
										onClick={() =>
											handleClickEditBookButton(item.id)
										}
									>
										Edit
									</EditButton>
									<DeleteButton
										onClick={(event: ICustomClickEvent) =>
											handleClickDeleteBookButton(
												event,
												item.id
											)
										}
									>
										Delete
									</DeleteButton>
								</ButtonContainer>
							) : (
								<></>
							)}
						</CardContainer>
					))}
			</Grid>
			{isOpen && (
				<BookModal
					title="Edit Book"
					setIsOpen={setIsOpen}
					bookId={editBook.id}
					bookTitle={editBook.title}
					year={editBook.year}
					description={editBook.description}
					book_cover={editBook.book_cover}
					edit={true}
				/>
			)}
		</>
	);
}

export { BooksGrid };
