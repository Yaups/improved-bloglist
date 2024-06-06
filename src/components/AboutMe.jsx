import useWindowDimensions from '../hooks/useWindowDimensions'

const minMargin = 0
const marginFactor = 80

const AboutMe = () => {
  const { width } = useWindowDimensions()
  const containerMargin = width < 500 ? minMargin : width / marginFactor

  return (
    <div className="container" style={{ padding: containerMargin }}>
      <h2 className="title">About me</h2>
      <hr />
      <p>
        Hi, I&apos;m Tom and this website is one of my submissions for the{' '}
        <a
          href="https://fullstackopen.com/en/"
          target="_blank"
          rel="noreferrer"
        >
          Fullstackopen
        </a>{' '}
        web development course. I have decided to touch up the website and host
        it on a custom domain as part of my portfolio.
      </p>
      <br />
      <p>
        This website was written with React on the front-end, and uses Express
        for the back-end, with MongoDB used as the choice of database. A fully
        functioning CI/CD pipeline, using GitHub Actions, triggers on every Git
        commit to the working repository. A full testing regime is automatically
        carried out including unit, integration and end-to-end tests. If even
        one test fails, the build will not succeed and the deployment update
        will not occur.
      </p>
      <br />
      <p>
        This is a simple single-page application website which functions as a
        blog list. Any logged in user can post a link to an existing blog, and
        any user can view existing posts and comment on them. There is no limit
        to the amount of times a user can comment on a blog, and all comments
        are anonymous. To reduce the possibility of spam posts, no accounts can
        be created and I have only shared the login details to one of the
        accounts on my covering letter accompanying job applications.
      </p>
      <br />
      <p>
        Any blog can be upvoted by clicking on the &quot;Like blog&quot; button
        on its individual view page. You do not need to be logged in to like a
        blog and you can like any blog an arbitrary amount of times.
      </p>
      <br />
      <p>
        I have also deployed a production-ready mobile app to the Google Play
        Store, which is publicly available{' '}
        <a
          href="https://play.google.com/store/apps/details?id=com.yaups.rate_repositories"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . This mobile app is the result of my coursework from the React Native
        Full Stack course extension.
      </p>
      <br />
      <p>Thanks for taking a look!</p>
    </div>
  )
}

export default AboutMe
