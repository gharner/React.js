export interface Article {
	name: string;
	title: string;
	content: string[];
}

export interface ArticlesListProps {
	articles: Article[];
}
