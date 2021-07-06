import {withRouter} from "react-router-dom"
import "./menuItem.styles.scss"

const MenuItem = ({id, size, imageUrl, title, history, linkUrl}) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content" onClick={() => history.push(`./${linkUrl}`)}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
