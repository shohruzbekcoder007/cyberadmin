import React from 'react'
import { LanguageList, LanguageListItem, LanguageSelectorWrapper, SelectedLanguage } from './styles'
import { useState } from 'react'

export default function LanguageSelector() {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Uz")
  const handleChangeLanguage = (lang) => {
    setSelected(lang)
    setOpen(false)
  }

  return (
    <LanguageSelectorWrapper>
        <SelectedLanguage onClick={() => {setOpen(prev => !prev)}}>{selected}</SelectedLanguage>
        <LanguageList open={open}>
            <LanguageListItem onClick={() => {handleChangeLanguage("Uz")}}>Uz</LanguageListItem>
            <LanguageListItem onClick={() => {handleChangeLanguage("Ru")}}>Ru</LanguageListItem>
            <LanguageListItem onClick={() => {handleChangeLanguage("En")}}>En</LanguageListItem>
        </LanguageList>
    </LanguageSelectorWrapper>
  )
}
