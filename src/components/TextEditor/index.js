import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Container,
  TextEditorContainer,
  ImageContainer,
  TextEditorHeading,
  TextEditorImage,
  TextContainer,
  ButtonContainer,
  ButtonItem,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldButton: false,
    italicButton: false,
    underLineButton: false,
    textInput: '',
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({
      boldButton: !prevState.boldButton,
    }))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({
      italicButton: !prevState.italicButton,
    }))
  }

  onClickUnderLineButton = () => {
    this.setState(prevState => ({
      underLineButton: !prevState.underLineButton,
    }))
  }

  onChangeTextInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  render() {
    const {boldButton, italicButton, underLineButton, textInput} = this.state

    const boldColor = boldButton ? '#faff00' : '#f1f5f9'
    const italicColor = italicButton ? '#faff00' : '#f1f5f9'
    const underlineColor = underLineButton ? '#faff00' : '#f1f5f9'

    const bold = boldButton ? 'bold' : 'normal'
    const italic = italicButton ? 'italic' : 'normal'
    const underLine = underLineButton ? 'underline' : 'normal'

    return (
      <Container>
        <TextEditorContainer>
          <ImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <ButtonContainer>
              <ButtonItem>
                <BoldButton
                  type="button"
                  onClick={this.onClickBoldButton}
                  boldColor={boldColor}
                  data-testid="bold"
                >
                  <VscBold size="22" />
                </BoldButton>
              </ButtonItem>
              <ButtonItem>
                <ItalicButton
                  type="button"
                  onClick={this.onClickItalicButton}
                  italicColor={italicColor}
                  data-testid="italic"
                >
                  <GoItalic size="22" />
                </ItalicButton>
              </ButtonItem>
              <ButtonItem>
                <UnderLineButton
                  type="button"
                  onClick={this.onClickUnderLineButton}
                  underlineColor={underlineColor}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size="22" />
                </UnderLineButton>
              </ButtonItem>
            </ButtonContainer>
            <TextArea
              type="description"
              rows="50"
              bold={bold}
              italic={italic}
              underLine={underLine}
              value={textInput}
              onChange={this.onChangeTextInput}
            />
          </TextContainer>
        </TextEditorContainer>
      </Container>
    )
  }
}
export default TextEditor
