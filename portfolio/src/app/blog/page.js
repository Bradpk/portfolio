import Navbar from "../components/navbar";
import styles from './blog.module.css';

function Blog() {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.blogcontainer}`}>
        <div id="carouselExampleCaptions" className='carousel slide'>
          <div className='carousel-indicators'>
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
          <div className={`container carousel-inner ${styles.content}`}>
            <div class="carousel-item active">
              <div className='justify-content-center text-center'>
                <h1>WEEK ONE</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TWO</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK THREE</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FOUR</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FIVE</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK SIX</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK SEVEN</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK EIGHT</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK NINE</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TEN</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK ELEVEN</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TWELVE</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK THIRTEEN</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FOURTEEN</h1>
                <p>.</p>
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