const AppSetup =  () => {
  $.post('/api/session', {'activate': null}, data => {
    if(data){
      // console.log(data);
    }
  });
};

$(() => {
  AppSetup();
  $('#sendButton').show()
  $('#loaderView').hide()
});

const isValidPhoneNumber =  function(phone){
  return phone.match(/\d/g).length === 10;
};

const isValidEmail =  function(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const RequestQuote = () => {
  const fullname = $('#inputName').val().trim();
  const email = $('#inputEmail').val().trim();
  const phone = $('#inputMobile').val().trim();
  const src = $('#DestinationFrom').val().trim();
  const dst = $('#DestinationTo').val().trim();
  const shippingType = $('#ShippingType').val().trim();
  const date = $('#sDate').val().trim();
  const message = $('#textMessage').val().trim();


  if(fullname.length < 3) {
    swal('Warning', 'Invalid Full Name', 'warning');
    return;
  }

  if(!isValidEmail(email)){
    swal('Warning', 'Invalid Email', 'warning');
    return;
  }

  if(phone.length < 10 || !isValidPhoneNumber(phone)){
    swal('Warning', 'Invalid Phone Number', 'warning');
    return;
  }

  if(src.length < 3){
    swal('Warning', 'Invalid Destination-From', 'warning');
    return;
  }

  if(dst.length < 3){
    swal('Warning', 'Invalid Destination-To', 'warning');
    return;
  }

  if(message.length < 10){
    swal('Warning', 'Invalid Message length', 'warning');
    return;
  }

  // all set
  $('#sendButton').hide()
  $('#loaderView').show()
  $.post('/api/request-quote', { fullname, email, phone, src, dst, shippingType, date, message }, data => {
    if(data){
      if(data.status){
        swal('Success', 'Request sent', 'success');
        document.getElementById('requestQuoteForm').reset();
      }else{
        swal('Error', 'Process failed. Try again!', 'error');
      }
      // $('#requestQuoteForm').reset()
    }else{
      swal('Error', 'Process failed. Try again!', 'error');
    }
    $('#sendButton').show()
    $('#loaderView').hide()
  });

};


const ContactUs = () => {
  const fullname = $('#inputName').val().trim();
  const email = $('#inputEmail').val().trim();
  const phone = $('#inputMobile').val().trim();
  const company = $('#inputCompany').val().trim();
  const message = $('#textMessage').val().trim();


  if(fullname.length < 3) {
    swal('Warning', 'Invalid Full Name', 'warning');
    return;
  }

  if(!isValidEmail(email)){
    swal('Warning', 'Invalid Email', 'warning');
    return;
  }

  if(phone.length < 10 || !isValidPhoneNumber(phone)){
    swal('Warning', 'Invalid Phone Number', 'warning');
    return;
  }

  if(company.length < 3){
    swal('Warning', 'Invalid Company Name', 'warning');
    return;
  }

  if(message.length < 10){
    swal('Warning', 'Invalid Message length', 'warning');
    return;
  }

  // all set
  $('#sendButton').hide()
  $('#loaderView').show()
  $.post('/api/contact-us', { fullname, email, phone, company, message }, data => {
    if(data){
      if(data.status){
        swal('Success', 'Request sent', 'success');
        document.getElementById('contactForm').reset();
      }else{
        swal('Error', 'Process failed. Try again!', 'error');
      }
      // $('#requestQuoteForm').reset()
    }else{
      swal('Error', 'Process failed. Try again!', 'error');
    }
    $('#sendButton').show()
    $('#loaderView').hide()
  });

};
