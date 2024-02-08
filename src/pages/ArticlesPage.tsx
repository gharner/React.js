import articles from '../assets/articles';
import ArticlesList from '../components/ArticlesList';
import UseUser from '../hooks/UseUser';

const ArticlesPage = () => {
	const { user } = UseUser();

	return (
		<>
			<h1>This is the articles page!</h1>

			<ArticlesList articles={articles}></ArticlesList>
		</>
	);
};

export default ArticlesPage;
