import logo from './logo.svg';
// import './App.css';
import Button from 'react-bootstrap/Button';
import styles from './App.module.css'
import Google from './assets/google-logo.png'
import Form from 'react-bootstrap/Form';
import { type } from '@testing-library/user-event/dist/type';


function App() {
  return (
    <div>
    <div className={styles.countdcs}> 
      <div className={styles.account}>
        <h1 className={styles.h1}>Create Your Account </h1>
        <p className={styles.p}>Welcome back! Please, enter your details</p>
      </div>

      <div className={styles.gmail}>
        <div className={styles.emailinput}>
        <button className={styles.button}>
          <img src={Google} alt='google' className={styles.logo} />
          <p style={{marginLeft: 10}}>Sign up with Google</p></button>
        </div>
     </div>
    </div>

    <Form>
      <Form.Group className={styles.secondphase}>
      <Form.Group className={styles.names}controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type='text'className={styles.email} placeholder="Enter your name"/>
      </Form.Group>

      <Form.Group className={styles.emails} controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' className={styles.email} placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className={styles.password} controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' className={styles.email} placeholder="*******"/>
      </Form.Group> 

      <Form.Group className={styles.retype} controlId="retype-word">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type='password' className={styles.email} placeholder="*******"/>
      </Form.Group>

      <Form.Group className={styles.accept} controlId='accept'>
        <Form.Check
        type='checkbox'
        label='I accepted all terms & conditions'
        />
      </Form.Group>

      <Button className={styles.Sign}>
        <p>Sign in</p></Button>

      </Form.Group>

      
    </Form>
    
     
    </div>

    
  );
}



export default App;
