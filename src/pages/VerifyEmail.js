import '../verifyEmail.css';

export default function VerifyEmail() {

  return (
    <>
      <div className='center'>
          <div className='verifyEmail'>
              <h1>Verify your Email Address</h1>
              <p>
                <strong>A Verification email has been sent to:</strong><br/>
              </p>
              <span>Follow the instruction in the email to verify your account</span> 
              <br/>      
              <button>
                Resend Email
              </button>
          </div>
      </div>
    </>
  );
}
