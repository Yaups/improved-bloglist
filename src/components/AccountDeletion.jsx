const AccountDeletion = () => {
  return (
    <div className="content">
      <h2>
        Request that your data be deleted from the Repository Reviewer App
      </h2>
      <br />
      <p>
        Since the Repository Reviewer is a demo app for my portfolio, it has no
        intention of being a long-lasting supported application so the server
        data itself does not need to be stored for very long. The Repository
        Reviewer App has its database reset every month or so, so all user data
        will be deleted and all demo accounts will reset whenever this happens.
      </p>
      <p>
        However, if you would like to delete your account and all associated
        reviews and comments from the Repository Reviewer App ASAP, please send
        an email to tpallison.ta@gmail.com asking me to reset the database, and
        I will perform a manual reset which will remove all user data from the
        database. This includes the deletion of your username, password, and all
        comments/ratings for repositories that you have made.
      </p>
    </div>
  )
}

export default AccountDeletion
