import Actions from './Actions';

function Post({author, text, title}){
    return(
        <article className='post'>
            <h2>{title}</h2>
            <p className='post-text'>{text}</p>
            <p className='post-author'>{author}</p>
            <Actions />
        </article>
    )
}

export default Post;