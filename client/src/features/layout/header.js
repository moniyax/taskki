/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { useDispatch } from 'react-redux'
import moon from './moon.svg'
import sun from './sun.svg'

const Header = () => {
  const dispatch = useDispatch()
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div
      sx={{
        bg: 'p.3',
        fontSize: 3,
        p: 3,
        color: 'n.7',
        fontWeight: 2,
        boxShadow: 0,
        top: 0,
        right: 0,
        left: 0,
        position: 'fixed',
        height: 7,
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 1,
      }}
    >
      <div className="appName">Taskki</div>
      <div sx={{ display: 'flex' }}>
        <button
          onClick={() => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}
          sx={{
            fontFamily: 'inherit',
            fontSize: 2,
            border: 0,
            padding: 0,
            bg: 'transparent',
            color: 'n.6',
            cursor: 'pointer',
            outline: 'none',
            mx: 2,
            fontWeight: 3,
          }}
        >
          <img
            src={colorMode === 'default' ? moon : sun}
            sx={{ width: 4 }}
            alt="color mode"
          />
        </button>

        <button
          onClick={() => {
            dispatch({ type: 'logout' })
          }}
          sx={{
            fontFamily: 'inherit',
            fontSize: 2,
            border: 0,
            padding: 0,
            bg: 'transparent',
            color: 'n.6',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
