import Article from "./Article"
export default function ArticleList({posts}) {
    const articleArrays = posts.map(eachPost => (
        <Article
            title={eachPost.title}
            date={eachPost.date}
            preview={eachPost.preview}
            key={eachPost.id}/>

    ))
    return (
        <main>{articleArrays}</main>
    )
}