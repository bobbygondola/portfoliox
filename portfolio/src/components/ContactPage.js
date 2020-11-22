import React from 'react';
import emailjs from 'emailjs-com';
import "../styles/css/App.css"

const ContactPage = () => {

    function useToggle(initialValue = false){
        const [value, setValue] = React.useState(initialValue);

        const toggle = React.useCallback(() => {
            setValue(v => !v);
        }, []);

        return [value, toggle]
    }

    const [isSubmitted, toggleIsSubmitted] = useToggle();

    function sendEmail(e) {
        e.preventDefault();


    emailjs.sendForm('service_bczolfw', 'template_lj566lp', e.target, 'user_hQPixskBNwkloxn3oefOy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    
    e.target.reset();
    

  }

  return (
    <div className='ContactForm'>
        <>
        {isSubmitted ? <div className="youveFoundAnEasterEgg"><h2 id="thanks">Thank You, I will reach back out! <span>hover me..</span></h2></div> : null}
        </>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='contactForm'>
                        <form id='contact-form' onSubmit={sendEmail}>

                            {/* Row 1 of form */}

                            <div className='row formRow'>
                                <div className='col-6'>
                                    <input
                                        type='text'
                                        name='from_name'
                                        className='form-control formInput'
                                        placeholder='Name'
                                    ></input>
                                </div>

                                <div className='col-6'>
                                    <input
                                        type='email'
                                        name='reply_to'
                                        className='form-control formInput'
                                        placeholder='Email address'
                                    ></input>
                                </div>
                            </div>

                            {/* Row 2 of form */}

                            <div className='row formRow'>
                                <div className='col'>
                                    <input
                                        type='text'
                                        name='subject'
                                        
                                        className='form-control formInput'
                                        placeholder='Subject'
                                    ></input>
                                </div>
                            </div>


                            {/* Row 3 of form */}

                            <div className='row formRow'>
                                <div className='col'>
                                    <textarea
                                        rows='5'
                                        name='message'
                                        className='form-control formInput'
                                        placeholder='This is a free, fast and reliable email program, try it out!'
                                    ></textarea>
                                </div>
                            </div>

                            <button onClick={toggleIsSubmitted} className='submit-btn' type='submit'>
                                Submit
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default ContactPage;