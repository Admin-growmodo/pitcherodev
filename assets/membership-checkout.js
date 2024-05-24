$(document).ready(function() {
    $('label#membership_1').on('click', function() {
        // Get the data-membership-id of the clicked label
        var membershipId = $(this).data('membership-id');

        // Update the value of the input field with the class 'product-id' to match the membership ID
        $('.product-id').val(membershipId);

        // Uncheck all radio buttons
        $('input.sr-only.peer').prop('checked', false);

        // Check the radio button with the same data-membership-id
        $('input.sr-only.peer[data-membership-id="' + membershipId + '"]').prop('checked', true).trigger('change');

        // Store the membership ID in localStorage
        localStorage.setItem('selectedProductId', membershipId);
    });

    // Add a change event to handle any additional logic after the radio is checked
    $('input.sr-only.peer').on('change', function() {
        if ($(this).is(':checked')) {
            console.log('Checked:', $(this).attr('id'));
        }
    });
});


$(document).ready(function() {
            // Function to initiate checkout with the selected product
            function initiateCheckout() {
                // Retrieve the stored product ID from localStorage
                var selectedProductId = localStorage.getItem('selectedProductId');

                if (selectedProductId) {
                    console.log('Selected Product ID:', selectedProductId);

                    // Redirect to the checkout page with the selected product ID
                    window.location.href = '/checkout?productId=' + selectedProductId;
                } else {
                    console.log('No product ID found in localStorage');
                }
            }

            // Add event listener to the checkout button
            $('#checkout-button3').on('click', function() {
                if ($(this).data('checkout-process') === 'submit') {
                    initiateCheckout();
                }
            });
        });