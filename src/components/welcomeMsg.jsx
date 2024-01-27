const WelcomeMsg=({onGetPostsClick})=>{
  return(
  <center className="welcome-msg">
  <h1 >There are no posts</h1>
  <button type="button"  onClick={onGetPostsClick}
  className="btn btn-primary">Get posts from server</button>
  </center>)
}
export default WelcomeMsg;