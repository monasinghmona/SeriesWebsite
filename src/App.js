import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App =() => {
return <React.Fragment>

<h1 className='tittle'>List of top 5 Hotstar Series in 2022</h1>


<div className="container">
  <div className="row">
    <div className="col-sm">
      <div class="card">
  <img src='https://i.ytimg.com/vi/pymRhLERVI4/sddefault.jpg#404_is_fine' class='card-img-top' alt='' height='200px'/>
  <div class="card-body">
    <h5 class="card-tittle">HOSTAGES</h5>
    <p class="card-text">
A night before the operation of the Chief Minister of Haryana, Dr. Mira Anand, his surgeon is held hostage along with her family by four masked men. Suitable for viewers 15+</p>
    <a href="https://www.hotstar.com/1260005113" class="btn btn-primary">Watch Now</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card">
  <img src='https://im.indiatimes.in/content/2020/Aug/Untitled-design---2020-08-11T132331233_5f324eb465d43.jpg' class='card-img-top' alt='' height='200px'/>
  <div class="card-body">
    <h5 class="card-title">CRIMINAL JUSTICE</h5>
    <p class="card-text">Eminent lawyer Bikram Chandra's happy life takes a nosedive when his wife, Anuradha, stabs him. Cops are baffled with her, and finding a lawyer for her looks impossible.</p>
    <a href="https://www.hotstar.com/1260049386" class="btn btn-primary">Watch Now</a>
  </div>
</div>
    </div>
    
    <div className="col-sm">
    <div class="card">
  <img src='https://www.scrolldroll.com/wp-content/uploads/2021/07/best-indian-web-series-on-hotstar-1.jpg' class='card-img-top' alt='' height='200px'/>
  <div class="card-body">
    <h5 class="card-title">GRAHAN</h5>
    <p class="card-text">In 1984 Bokaro, desperate for his late father’s job, Rishi meets union leader Chunnu. In 2016 Ranchi, City SP Amrita Singh is caught in red tape trying to solve a reporter's murder.</p>
    <a href="https://www.hotstar.com/1260063718" class="btn btn-primary">Watch Now</a>
  </div>
</div>
    </div>
    
    
  </div>
  
</div>


</React.Fragment>;

};

export default App;
