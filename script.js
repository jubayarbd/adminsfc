function handleKeyPress(event, inputId) {
    // Check if the Enter key is pressed (key code 13)
    if (event.keyCode === 13) {
        performSearch(inputId);
    }
}

function performSearch(inputId) {
    // Get the value from the input field
    var searchWord = document.getElementById(inputId).value;

    // Check if a search word is entered
    if (searchWord.trim() !== "") {
        // Define URLs for each search box
        var urlMap = {
            'consignmentId': 'https://adminnew.steadfast.com.bd/admin/consignment/single/',
            'trackingId': 'https://adminnew.steadfast.com.bd/admin/consignment/single/tracking-id?_token=2PqIXfgNsZ5wKiCsPFQXusM6oIp1mZafsPOxynIB&track_id=',
            'paymentId': 'https://adminnew.steadfast.com.bd/admin/accounts/payment/single/',
            'userId': 'https://adminnew.steadfast.com.bd/admin/merchant/profile/',
            'ticketId': 'https://adminnew.steadfast.com.bd/admin/support/single/',
            'dispatchtId': 'https://adminnew.steadfast.com.bd/admin/dispatch/show/',
            'riderRating': 'https://adminnew.steadfast.com.bd/admin/rider/ratings/single/',
            'riderNumber': 'https://adminnew.steadfast.com.bd/admin/deliveryman/'
        };


        // Get the URL based on the input ID
        var url = urlMap[inputId] + encodeURIComponent(searchWord);

        // Open the URL in a new tab/window
        window.open(url, '_blank');
    }
}
