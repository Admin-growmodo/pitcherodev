$(document).ready(function() {
    $('label#membership_1').on('click', function() {
        // Get the data-membership-id of the clicked label
        var membershipId = $(this).data('membership-id');

        // Check the radio button with the same data-membership-id
        $('input.sr-only.peer').each(function() {
            if ($(this).data('membership-id') == membershipId) {
                $(this).prop('checked', true).change(); // Use .prop() to set the checked attribute and .change() to trigger the change event
            } else {
                $(this).prop('checked', false);
            }
        });
    });
});