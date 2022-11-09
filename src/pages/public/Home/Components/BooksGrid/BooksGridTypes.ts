interface IBook {
	id: number;
	title: string;
	year: number;
	description?: string;
	book_cover: string;
	user?: {
		id: number;
		name: string;
		email: string;
		profile_picture: string;
	};
}

interface IBookGridProps {
	data: IBook[];
}

export type { IBook, IBookGridProps };
