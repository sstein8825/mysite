import { Container } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container>
      <div class="jumbotron pt-5">
        <h1 class="display-3 d-flex justify-content-center">Welcome...</h1>
        <div class="row">
          <div class="col">
            <p class="d-flex justify-content-center">
              My name is Scott Steinmetz and this is my website.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <p>I'm a software engineer with over 10 years of experience in the field of information technology.  
              I've worked with a wide range of technology in my professional career and on my personal time.
              I love to learn.  
              Please take a look around at all the different projects I've worked on and to learn more about my professional experience.</p>
          </div>
          <div class="col-2"></div>
        </div>
        <h2 class="display-6 d-flex justify-content-center">Contact Me</h2>
        <form>
          <div class="row pt-3">
            <div class="col"></div>
            <div class="col">
              <div class="form-group">
                <label for="yourName"><b>Your Name</b></label>
                <input type="text" class="form-control" id="yourName" placeholder="" />
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row pt-3">
            <div class="col"></div>
            <div class="col">
              <div class="form-group">
                <label for="yourSubject"><b>Subject</b></label>
                <input type="text" class="form-control" id="yourSubject" placeholder="" />
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row pt-3">
            <div class="col"></div>
            <div class="col">
              <div class="form-group">
                <label for="yourMessage"><b>Message</b></label>
                <textarea rows="4" class="form-control" id="yourMessage" placeholder="" />
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row pt-3">
            <div class="col"></div>
            <div class="col">
              <button type="submit" class="btn mb-2"><b>Send</b></button>
            </div>
            <div class="col"></div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default App;
