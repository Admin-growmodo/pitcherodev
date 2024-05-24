$(document).ready(function() {
            $('label').on('click', function() {
                // Get the data-membership-id of the clicked label
                var membershipId = $(this).data('membership-id');

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
            // Retrieve the stored product ID from localStorage
            var selectedProductId = localStorage.getItem('selectedProductId');

            if (selectedProductId) {
                console.log('Selected Product ID:', selectedProductId);

                // Function to initiate checkout with the selected product
                function initiateCheckout(productId) {
                    var checkoutUrl = '/cart/' + productId + ':1'; // Append product ID and quantity to the checkout URL
                    window.location.href = checkoutUrl; // Redirect to the checkout URL
                }

                // Add event listener to the checkout button
                $('.button[data-checkout-process="submit"]').on('click', function() {
                    initiateCheckout(selectedProductId);
                });

                // Optionally, you can clear the localStorage if you only need it once
                // localStorage.removeItem('selectedProductId');
            } else {
                console.log('No product ID found in localStorage');
            }
        });