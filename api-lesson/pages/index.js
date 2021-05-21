function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <form action="">
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea rows="5" id="feedback"></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
