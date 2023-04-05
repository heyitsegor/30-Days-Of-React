// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import userPhoto from './images/asabeneh.jpg'

const userName = 'ASABENEH YETAYEH'
const additionalInfo = 'Senior Developer,Finland'
const skillsList = [
  'HTML',
  'CSS',
  'Sass',
  'JS',
  'React',
  'Redux',
  'Node.js',
  'MongoDB',
  'Python',
  'Flask',
  'Django',
  'MySQL',
  'GraphQL',
  'D3.js',
  'Gatsby',
  'Doker',
  'Heroku',
  'Git',
]
const joinDate = 'Joined on Aug 30, 2020'

const userInfo = (
  <main>
    <img class='user-photo' src={userPhoto} alt='user' />
    <h2 class='user-name'>{userName}</h2>
    <p class='user-info'>{additionalInfo}</p>
  </main>
)

const userSkills = (
  <div class='user-skills'>
    <h1>Skills</h1>
    <ul class='skills-list'>
      {skillsList.map((el) => <li>{el}</li>)}
    </ul>
  </div>
)

const userJoined = (
  <div className='join-date'>
    <p>{joinDate}</p>
  </div>
)

const userCard = (
  <div>
    {userInfo}
    {userSkills}
    {userJoined}
  </div>
)

const app = (
  <div className='app'>
    {userCard}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
