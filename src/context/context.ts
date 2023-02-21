import React from "react"

const Context = React.createContext({value: 0})

const ContextProvider = Context.Provider
const ContextConsumer = Context.Consumer

export {Context, ContextProvider, ContextConsumer}