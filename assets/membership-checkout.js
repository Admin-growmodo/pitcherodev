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


