import Post from './Post';

function ProfileCard(){
    return(
        <section className='profile-card'>
            <div className='profile'>
                <div className="avatar">avatar</div>
                <div className='profile-info'>
                    <h2>My Real Name</h2>
                    <p>social network nickname</p>
                </div>
            </div>
            <Post author="Victor" title="Study React for frontend" likes={17} text="какой-то текст"/>
            <Post author="Victor" title="Блалала" likes={17} text="еще какой-то текст"/>
            <Post author="Victor" title="Пупупу" likes={17} text="и еще какой-то текст"/>
        </section>
    )
}

export default ProfileCard;

