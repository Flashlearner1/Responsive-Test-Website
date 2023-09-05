
import './App.css';

function MyComponent() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src="https://spng.pngfind.com/pngs/s/448-4482063_flow-jamaica-logo-you-then-i-love-you.png" alt="logo" />
        </div>
        <div className="navbar">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li> 
          </ul>
        </div>
      </div>

      <div className="my-component">
        <div className='write'>
          <h1>Responsive Test Website</h1>
          <p>Content goes here.</p>
        </div>
        
        <div className="image" >
          <img src="https://cdn.wallpapersafari.com/88/12/kuQ96F.jpg" alt="" height='300px'/>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/021/665/576/small_2x/delicious-grilled-chicken-cutout-png.png" alt="" height='300px'/>
          <img src="https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=pexels-pixabay-262897.jpg&fm=jpg" alt="" height='300px'/>
          <img src="https://us.123rf.com/450wm/bbtreesubmission/bbtreesubmission1902/bbtreesubmission190206949/117880508-chopsticks-holding-stir-fried-seasoned-webfoot-octopus-with-thinly-sliced-carrot-and-spring-onion.jpg?ver=6" alt=""  height='300px' />
          <img src="https://i.pinimg.com/originals/ea/1f/28/ea1f28b089c51b4421d38a3ac3308adb.png" alt="" height='300px'/>
          <img src="https://wallpaperaccess.com/full/767093.jpg" alt="" height='300px'/>
        </div>
      </div>

      <footer>
        <div className='foot'>
          <div className="col1">
            <h2>Flow Company</h2>
            <p>We strive to give an excellent service to our lovely customers</p>
          </div>

          
          <div className="col1">
            <h1>Services</h1>
            <ul>
              <li>Type</li>
              <li>Kind</li>
              <li>Selection</li>
            </ul>
          </div>

          <div className="col1">
            <h1>Social Media</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Google</li>
            </ul> 
          </div>

        </div>
        

        <div className="copyright">
          <span>2023 ©Copyright. All Rights Reserved</span>
        </div>
      </footer>
    </div>


  );
};

export default MyComponent;
