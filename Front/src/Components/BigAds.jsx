import Carousel from 'react-bootstrap/Carousel';


function BigAds(){
    return(
        <div className='adbody'>
                <Carousel>
      <Carousel.Item>
        <img
          className="adpic"
          src="https://cdn.wallpapersafari.com/38/98/CF2pWK.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="adpic"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Ultrawide-Wallpaper-Nature-HD.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="adpic"
          src="https://wallpapercave.com/wp/wp8432913.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="adpic"
          src="https://i.redd.it/v7cbusgef5251.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="adpic"
          src="https://wallpapercave.com/wp/wp8075569.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="adpic"
          src="https://wallpapercave.com/wp/wp5894920.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sixth</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default BigAds