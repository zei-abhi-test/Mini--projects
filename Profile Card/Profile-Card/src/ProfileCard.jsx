export default function ProfileCard({name , avatar , bio}) {
    return (
        <div>
            <img src={avatar} alt="name" />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}