import { useState } from 'react'


export function ArticleManager() {

    const [articles, setArticles] = useState([]);
 
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const onClickAdd = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = {
                id: Date.now(),
                title: title.trim(),
                summary: summary.trim(),
                display: 'none'
            };
            setArticles([...articles, newArticle]);
            setTitle("");
            setSummary("");
        }
    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };


    const onClickToggle = (id) => {
        setArticles(articles.map(article => 
            article.id === id 
                ? { ...article, display: article.display === 'none' ? 'block' : 'none' }
                : article
        ));
    };

    return (
        <div>
            <h1>Articles</h1>

            <section>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Summary" 
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
                <button onClick={onClickAdd}>Add</button>
            </section>

            {/* List section */}
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <a 
                            href={`#${article.id}`} 
                            onClick={(e) => {
                                e.preventDefault();
                                onClickToggle(article.id);
                            }}
                        >
                            {article.title}
                        </a>
                        <button onClick={() => onClickRemove(article.id)}>×</button>
                        <p style={{display: article.display}}>{article.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function AddArticle({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }) {
    return (
        <section>
            <h1>{name}</h1>
            <input 
                type="text" 
                placeholder="Title" 
                value={title}
                onChange={onChangeTitle}
            />
            <input 
                type="text" 
                placeholder="Summary" 
                value={summary}
                onChange={onChangeSummary}
            />
            <button onClick={onClickAdd}>Add</button>
        </section>
    );
}

export function ArticleList({ articles, onClickRemove }) {
    return (
        <ul>
            {articles.map((article) => (
                <ArticleItem 
                    key={article.id} 
                    article={article} 
                    onClickRemove={onClickRemove} 
                />
            ))}
        </ul>
    );
}
export function ArticleItem({ article, onClickRemove }) {

    const [isOpened, setIsOpened] = useState(false);

    const onClickToggle = (e) => {
        e.preventDefault();
        setIsOpened(!isOpened);
    };

    return (
        <li>
            <a 
                href={`#${article.id}`} 
                title="Toggle Summary" 
                onClick={onClickToggle}
            >
                {article.title}
            </a>
            <button onClick={() => onClickRemove(article.id)}>×</button>
            <p style={{display: isOpened ? 'block' : 'none'}}>
                {article.summary}
            </p>
        </li>
    );
}

export function ArticleManagerRefactored() {

    const [articles, setArticles] = useState([]);

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const onClickAdd = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = {
                id: Date.now(),
                title: title.trim(),
                summary: summary.trim()

            };
            setArticles([...articles, newArticle]);
            setTitle("");
            setSummary("");
        }
    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSummaryChange = (e) => setSummary(e.target.value);

    return (
        <div>
            <AddArticle 
                name="Articles"
                title={title}
                summary={summary}
                onChangeTitle={handleTitleChange}
                onChangeSummary={handleSummaryChange}
                onClickAdd={onClickAdd}
            />
            <ArticleList 
                articles={articles} 
                onClickRemove={onClickRemove} 
            />
        </div>
    );
}

export function ArticleManagerWithRenderProps({ addArticle, articleList }) {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const onClickAdd = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = {
                id: Date.now(),
                title: title.trim(),
                summary: summary.trim()
            };
            setArticles([...articles, newArticle]);
            setTitle("");
            setSummary("");
        }
    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSummaryChange = (e) => setSummary(e.target.value);

    return (
        <div>
            {addArticle({
                name: 'Articles',
                title,
                summary,
                onChangeTitle: handleTitleChange,
                onChangeSummary: handleSummaryChange,
                onClickAdd
            })}
            {articleList({
                articles,
                onClickRemove
            })}
        </div>
    );
}

export default ArticleManagerRefactored;
