import './main.css';


function Content(){
    return <div><div className="main">
        
    <div className="left">
     
      <i class="fa-solid fa-user"></i>
    </div>
     <div className="content">
         <form action="backend.php">
             {/* <p> <i class="fa-solid fa-user"></i> USER ID <input type="text" name="username"/> </p> <br/>
             <p> <i class="fa-solid fa-lock"></i> PASSWORD<input type="password" name="password"/></p> */}

             <p><label for='userid'><i class="fa-solid fa-user"></i> USER ID</label> <input type="text" id='userid' name="userid"/></p> <br/>
             <p><label for='password'> <i class="fa-solid fa-lock"></i>PASSWORD</label> <input type="password" id='password' name="password"/></p> <br/>
          </form>
          
          <div className="login">
              <p>LOG IN</p>
              
          </div>

      </div>      
      
</div></div>
}

export default Content;