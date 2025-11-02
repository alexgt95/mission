$(document).ready(function () {
  Stripe.setPublishableKey('pk_test_9D43kM3d2vEHZYzPzwAblYXl');

  // Check for any empty inputs
  function findEmpty() {
    $('#form-container input').each(function () {
      if (!$(this).val().trim()) {
        $(this).addClass('invalid');
      } else {
        $(this).removeClass('invalid');
      }
    });
  }

  // Detect card type and show icon
  function checkCardType() {
    let cardNumber = $('#card-number').val();
    if (!cardNumber) return;

    let cardType = Stripe.card.cardType(cardNumber);
    if (cardType === 'Visa') {
      $('#card-image').html('<i class="fa fa-cc-visa fa-2x"></i>');
    } else if (cardType === 'MasterCard') {
      $('#card-image').html('<i class="fa fa-cc-mastercard fa-2x"></i>');
    } else if (cardType === 'American Express') {
      $('#card-image').html('<i class="fa fa-cc-amex fa-2x"></i>');
    } else if (cardType === 'Discover') {
      $('#card-image').html('<i class="fa fa-cc-discover fa-2x"></i>');
    } else {
      $('#card-image').empty();
    }
  }

  $('#card-number').on('input', checkCardType);

  $('#card-btn').on('click', function () {
    findEmpty();
    if ($('.invalid').length > 0) {
      $('#form-errors').removeClass('hidden');
      $('#card-success').addClass('hidden');
      $('#card-error').text('Please fill out all required fields.');
      return;
    }

    // Simulate payment success for demo
    $('#form-errors').addClass('hidden');
    $('#card-success').removeClass('hidden');
  });
});
