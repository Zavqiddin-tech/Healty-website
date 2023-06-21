

function HomeBox({img, text, number}) {
  return (
    <div className="home__box">
        <div className="home__img">
            <img src={img} alt="" />
        </div>
        <div className="home__info">
            <div className="home__text">{text}</div>
            <div className="home__number">{number}</div>
        </div>
    </div>
  )
}

export default HomeBox