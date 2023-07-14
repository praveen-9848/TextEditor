import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`
export const TextEditorContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b1c22;
  width: 70%;
  height: 80vh;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
`
export const TextEditorHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const TextEditorImage = styled.img`
  height: 50%;
  width: 60%;
  margin-top: 60px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #25262c;
  height: 75vh;
  width: 48%;
  border-radius: 10px;
`
export const ButtonContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #334155;
`
export const ButtonItem = styled.li`
  list-style-type: none;
`

export const BoldButton = styled.button`
  color: ${props => props.boldColor};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ItalicButton = styled.button`
  color: ${props => props.italicColor};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UnderLineButton = styled.button`
  color: ${props => props.underlineColor};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextArea = styled.textarea`
  color: #f1f5f9;
  font-size: 16px;
  font-family: 'Roboto';
  font-style: ${props => props.italic};
  font-weight: ${props => props.bold};
  text-decoration: ${props => props.underLine};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 20px;
  margin-top: 20px;
`
