import "./Card.css"

// eslint-disable-next-line no-empty-pattern
const Card = ({
    imgSrc,
    imgAlt,
    cardtitle,
    carddesc,
    description,
    cardbtn,
    link,
}) => {
  return (
    <div className="Card-container">
        <img className="Card-img" src={imgSrc} alt={imgAlt} />
        <h1 className="Card-title"><h5>Country:</h5>{cardtitle}</h1>
        <p className="Card-description"><h4>Alternate Spellings:</h4>{carddesc}</p>
        <p className="Card-description"><h4>Capital:</h4>{description}</p>
        <a className="Card-btn" href={link}><h4>Population:</h4>{cardbtn}</a>
    </div>
  )
}

export default Card