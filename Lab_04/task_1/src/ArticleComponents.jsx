import { useState } from 'react'

/**
 * Lab 4.2: Refactoring — ArticleList, ArticleItem, AddArticle
 * 
 * This file contains all components for article management:
 * - ArticleManager: Main component that manages articles state
 * - AddArticle: Component for adding new articles
 * - ArticleList: Component that displays list of articles
 * - ArticleItem: Component for individual article item
 */

// Task 1: Monolithic Component (starting point)
export function ArticleManager() {
    // State for articles array (each article: {id, title, summary, display: 'none' or 'block'})
    const [articles, setArticles] = useState([]);
    
    // State for form inputs
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    // Function to add new article
    const onClickAdd = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = {
                id: Date.now(), // Simple ID generation
                title: title.trim(),
                summary: summary.trim(),
                display: 'none' // Initial state: summary hidden
            };
            setArticles([...articles, newArticle]);
            setTitle("");
            setSummary("");
        }
    };

    // Function to remove article by id
    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };

    // Function to toggle article display (used in monolithic version)
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
            
            {/* Form section */}
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

// Task 2: AddArticle Component
/**
 * AddArticle component for adding new articles
 * Props: name, title, summary, onChangeTitle, onChangeSummary, onClickAdd
 */
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

// Task 3: ArticleList Component
/**
 * ArticleList component that displays list of articles
 * Props: articles (array), onClickRemove (function)
 */
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

// Task 3: ArticleItem Component
/**
 * ArticleItem component for individual article
 * Props: article (object), onClickRemove (function)
 * Uses useState for local isOpened state (instead of article.display from parent)
 */
export function ArticleItem({ article, onClickRemove }) {
    // Local state for expansion (moved from parent's article.display)
    const [isOpened, setIsOpened] = useState(false);

    // Toggle handler (moved into ArticleItem)
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

// Task 1-3: Refactored ArticleManager using extracted components
/**
 * Refactored ArticleManager that uses AddArticle, ArticleList, and ArticleItem
 * ArticleItem now manages its own expansion state (useState for isOpened)
 */
export function ArticleManagerRefactored() {
    // State for articles array (no longer needs display property)
    const [articles, setArticles] = useState([]);
    
    // State for form inputs
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    // Function to add new article
    const onClickAdd = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = {
                id: Date.now(),
                title: title.trim(),
                summary: summary.trim()
                // No display property needed - ArticleItem manages its own state
            };
            setArticles([...articles, newArticle]);
            setTitle("");
            setSummary("");
        }
    };

    // Function to remove article by id
    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };

    // Handlers for form inputs
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

// Task 4 (Optional): ArticleManager with Render Props Pattern
/**
 * ArticleManager that accepts render props for component substitution
 * Props: addArticle (function), articleList (function)
 */
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
