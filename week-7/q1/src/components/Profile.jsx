
import viteLogo from '/vite.svg'

export default function Profile({name, age, address, followers, likes, photos}) {

    return (
        <div className="profile-card">
            <div className="upper"></div>
            <img src={viteLogo} className='logo' alt="your profile pic" />
            <div className="logo-background"></div>
            <div className="middle">
                <div className="name-age-address">
                    <div className="name-age">
                        <span className="name bold">{name}</span>
                        <span className="age text2"> {age} </span>
                    </div>
                    <div className="address">{address}</div>
                </div>
            </div>
            <div className="footer">
                <div className="followers">
                    <div className="num bold">{followers}</div>
                    <div className="text">Followers</div>
                </div>
                <div className="likes">
                    <div className="num bold">{likes}</div>
                    <div className="text">Likes</div>
                </div>
                <div className="photos">
                    <div className="num bold">{photos}</div>
                    <div className="text">Photos</div>
                </div>
            </div>
        </div>
    )
}