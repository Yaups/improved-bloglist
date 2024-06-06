const WelcomeInfo = () => (
  <p>
    Hi and welcome to my showcase website! Developed as a part of the{' '}
    <a href="https://fullstackopen.com/" target="_blank" rel="noreferrer">
      Fullstackopen{' '}
    </a>
    course, this website was built in React for the front-end and uses Express
    on the back-end, written in JavaScript. Blog listing and user account data
    is stored in MongoDB. This website also has a fully functioning CI/CD
    pipeline via GitHub actions used to automatically test whether any updates
    cause a broken build, and if so then the changes will not be deployed. Feel
    free to log in using the supplied username and password and try out the
    site!
  </p>
)

export default WelcomeInfo
