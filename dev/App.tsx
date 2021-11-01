import React, { Component } from "react"

import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
  addLinkSnippet,
  dropMessages,
  addUserMessage,
} from "../index"
// import { addUserMessage } from ".."

export default class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!")
    addLinkSnippet({ link: "https://google.com", title: "Google" }, "cai" , 3)
    addResponseMessage(
      "![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)",
      "Vaishali2",
      3
    )
    addResponseMessage(
      "![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)",
      "Vaishai22"
    )
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader()
    setTimeout(() => {
      toggleMsgLoader()
      if (newMessage === "fruits") {
        setQuickButtons([
          { label: "Apple", value: "apple" },
          { label: "Orange", value: "orange" },
          { label: "Pear", value: "pear" },
          { label: "Banana", value: "banana" },
        ])
      } else {
        addResponseMessage(newMessage, "Vaishali")
      }
    }, 2000)
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage("Selected " + e, "Vaishali")
    setQuickButtons([])
  }

  handleSubmit = (msgText: string) => {
    if (msgText.length < 10) addUserMessage("Uh oh, please write a bit more.")
    else addUserMessage(msgText, "Me", 10)
    return false
    // return true
  }

  render() {
    return (
      <div>
        <button style={{ position: "absolute", right: 40, bottom: 150 }}>
          test
        </button>
        <Widget
          title="Bienvenido"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
