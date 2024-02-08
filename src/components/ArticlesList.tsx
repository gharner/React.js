import { Link } from 'react-router-dom';
import { ArticlesListProps } from '../types/ArticleTypes';

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
	return (
		<>
			{articles.map(article => (
				<>
					<Link
						key={article.name}
						to={`/articles/${article.name}`}>
						<h3>{article.title}</h3>
					</Link>
					<p>{article.content[0]?.substring(0, 150)}</p>
				</>
			))}
		</>
	);
};
export default ArticlesList;
