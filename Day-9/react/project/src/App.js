
import './App.css';

function App() {
  return (
    <div className="log">
      <form action="">
        <h1>LOG IN</h1>
        <label for="name">userName :</label>
        <input type="text" required /><br /><br />
        <label for="email">Email :</label>
        <input type="email" required /><br /><br />
        <label for="password">Password :</label>
        <input type="password" required /><br /><br />
        <label for="CPassword">Confirm Password :</label>
        <input type="password" required /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
