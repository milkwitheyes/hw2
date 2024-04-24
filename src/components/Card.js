import logo from '../data/logo.svg';
function Card() {
    return (
        <div className='card'>
            <img src={logo} />
            <h1>title</h1>
            <button>add to cart</button>
        </div>
    )
}
export default Card