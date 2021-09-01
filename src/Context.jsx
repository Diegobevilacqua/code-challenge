import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const Context = React.createContext(null)

export const ContextProvider = ({children}) => {
    const [url, setUrl] = useState("")
  
    return <Context.Provider value={[url, setUrl]}>{children}</Context.Provider>
}

ContextProvider.propTypes = {
    children: PropTypes.element,
}