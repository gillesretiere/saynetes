import HeaderCartolang from "./HeaderCartolang";
import Footer from "./Footer"

import classes from "./Layout.module.css";

const LayoutCartolang = ({ children, callBackFunction, }) => {
  return (
    <div id="layout" className={classes.container}>
      <HeaderCartolang callBackFunction={callBackFunction}/>
      {/*<CurrentDecks />*/}
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default LayoutCartolang