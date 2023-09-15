import React,{useState} from 'react'

const Contact = () => {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);

  const handleOTPInputChange = (event) => {
    event.preventDefault();

    const otp = event.clipboardData.getData('text/plain');
    const otpDigitsArray = otp.split('').slice(0, 6);

    setOtpDigits((prevDigits) => {
      const newDigits = [...prevDigits];

      otpDigitsArray.forEach((digit, index) => {
        if (index < 6) {
          newDigits[index] = digit;
        }
      });

      return newDigits;
    });
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    setOtpDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = value;
      return newDigits;
    });

    // Move to the next input field if a digit is entered
    if (value && index < 5 && event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    }
  };
  return (
    <>
    <h1>Contact us page</h1>
     <form>
      {otpDigits.map((digit, index) => (  
     
            
            <input type="text" id="first_name"
            key={index}
            maxLength={1}
            value={digit}
            onChange={(event) => handleInputChange(index, event)}
            onPaste={handleOTPInputChange}
            className='border w-10 rounded border-2 m-2 border-rose-600'/>    
       
      ))}
    </form>
    
    </>
  )
}

export default Contact