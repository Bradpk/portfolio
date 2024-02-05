import Navbar from "../components/navbar";
import styles from './blog.module.css';

function Blog() {
  return (
    <div>
    <Navbar />
    <div className={`container ${styles.blogcontainer}`}>
    <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" aria-label="Slide 14"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='justify-content-center text-center'>
                <h4>WEEK ONE</h4>
                <p>A game designed for musicians to improve their auditory recognition</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK TWO</h4>
                <p class="description">A virtual musical synthesizer with controls for oscillator selection and envelope settings</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK THREE</h4>
                <p class="description">A rendition of the classic game Tic-Tac-Toe
                  Give it a go!</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK FOUR</h4>
                <p class="description">A to-do list, because you keep forgetting that you need onions from Kroger </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK FIVE</h4>
                <p class="description">A weather app that allows you to fetch weather information from a given zip code</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK SIX</h4>
                <p class="description">A mock restaurant website I created to practice making HTTP requests</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK SEVEN</h4>
                <p class="description">An alarm clock designed to get you up and at 'em. But whats the magic button do?</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK EIGHT</h4>
                <p class="description">A random story generator with options for names and measurements</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK NINE</h4>
                <p class="description">A project that guesses the number you picked in your head, whoa..</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK TEN</h4>
                <p class="description">A virtual musical synthesizer with controls for oscillator selection and envelope settings</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK ELEVEN</h4>
                <p class="description">A virtual musical synthesizer with controls for oscillator selection and envelope settings</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK TWELVE</h4>
                <p class="description">A virtual musical synthesizer with controls for oscillator selection and envelope settings</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK THIRTEEN</h4>
                <p class="description">A virtual musical synthesizer with controls for oscillator selection and envelope settings</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h4>WEEK FOURTEEN</h4>
                <p class="description">A virtual musical synthesizer with controls for oscillator selection and envelope settings</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
    </div>
  );
}

export default Blog;