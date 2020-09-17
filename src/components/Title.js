import React from 'react'
import styled from 'styled-components'


const Title = ({ title, subtitle }) => {
  return (
    <TittleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TittleWrapper>
  )
}

const TittleWrapper = styled.div`
text-transform: uppercase;
font-size: 2rem;
margin-bottom: 2rem;
h4 {
  text-align:center;
  letter-spacing: 8px;
  color: var(--primaryColor);
}
.title {
  color: var(--mainBlack)
}
span {
  display:block;
}
@media (min-width: 576px) {
  span {
    display: inline-block;
    margin: 0 O.55rem;
    
  }
}
`

export default Title
