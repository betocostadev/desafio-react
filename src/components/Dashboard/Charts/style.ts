import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 1rem;
    justify-content: center;
    background: #7cc5ea;
    color: #3f3f3f;
    line-height: 1rem;
    font-family: 'Concert One', cursive;
    @media only screen and (min-width: 768px) {
        padding: 0;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 1rem;
    padding: 1rem;
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`

export const CardDashboard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
  margin: 0 1rem;
  background-color: #f9f9f9;
  height: 280px;
  overflow-x: scroll;
`
