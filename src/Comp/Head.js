//https://react-icons.github.io/react-icons
import { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { ThemeContext } from "../Context/ThemeProvider";

const Head = () => {
  const {isDark} = useContext(ThemeContext)
  console.log(isDark)
  return (
    <header>
      <h1>TODO</h1>
      <button className="btn btn-round">
        <BiSun />
      </button>
    </header>
  )
}

export default Head