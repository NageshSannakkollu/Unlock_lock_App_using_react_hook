// Write your code here

import {useState} from 'react'
import {
  ComponentContainer,
  ButtonElement,
  LockImage,
  LockDescription,
} from './styledComponents'

const Unclock = () => {
  const [buttonLock, setLockButton] = useState(false)

  const clickToLockAndUnlock = () => {
    setLockButton(prevState => !prevState)
  }

  const buttonText = buttonLock ? 'lock' : 'Unlock'
  const lockImage = buttonLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const lockImageAltText = buttonLock ? 'Unlock' : 'lock'
  const heading = buttonLock
    ? 'Your Device Is Unlocked'
    : 'Your Device Is Locked'
  return (
    <ComponentContainer>
      <LockImage src={lockImage} alt={lockImageAltText} />
      <LockDescription>{heading}</LockDescription>
      <ButtonElement type="button" onClick={clickToLockAndUnlock}>
        {buttonText}
      </ButtonElement>
    </ComponentContainer>
  )
}

export default Unclock
