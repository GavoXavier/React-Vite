import profilePic from './assets/images.jpg'
function Card(){

const handleClick = (e) => e.target.style.display="none";

    return(
<div className="card">
    <img onClick={(e)=> handleClick(e)} className='image-small' alt="profile pic" src={profilePic}  />
    <h2 className='title'>Gavinlee Xavier Fernandes</h2>
    <p>Software Engineer</p>
    <p>Gamer</p>
    <a href="#">Read More</a>
</div>


    )
}
export default Card