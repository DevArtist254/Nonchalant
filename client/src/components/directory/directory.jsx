import React from "react"
import MenuItem from "../menuItem /menuItem"
import "./directory.styles.scss"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectDirectory} from "../../redux/home/home.selector"

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map((section) => {
      return (
        <MenuItem
          key={section._id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      )
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectory,
})

export default connect(mapStateToProps)(Directory)
