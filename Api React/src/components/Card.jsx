import "./Card.css"

// eslint-disable-next-line no-empty-pattern
const Card = ({
    imgSrc,
    imgAlt,
    cardtitle,
    carsdesc,
    cardbtn,
}) => {
  return (
    <div className="Card-container">
        <img className="Card-img" src={imgSrc} alt={imgAlt} />
        <h1 className="Card-title">{cardtitle}</h1>
        <p className="Card-description">{carsdesc}</p>
        <a className="Card-btn" href="/">{cardbtn}</a>
    </div>
  )
}

export default Card