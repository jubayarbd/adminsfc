        function handleKeyPress(event, inputId) {
            // কীবোর্ডে Enter বাটন (key code 13) চাপা হয়েছে কিনা তা পরীক্ষা করা হচ্ছে
            if (event.keyCode === 13) {
                performSearch(inputId);
            }
        }

        function performSearch(inputId) {
            // ইনপুট ফিল্ড থেকে ভ্যালু নেওয়া হচ্ছে
            var searchWord = document.getElementById(inputId).value;

            // সার্চ করার জন্য কোনো শব্দ লেখা হয়েছে কিনা তা পরীক্ষা করা হচ্ছে
            if (searchWord.trim() !== "") {
                // প্রতিটি সার্চ বক্সের জন্য URL নির্ধারণ করা হচ্ছে
                var urlMap = {
                    'consignmentId': 'https://admin.packzy.com/admin/consignment/single/',
                    'trackingId': 'https://admin.packzy.com/admin/consignment/single/tracking-id?_token=2PqIXfgNsZ5wKiCsPFQXusM6oIp1mZafsPOxynIB&track_id=',
                    'paymentId': 'https://admin.packzy.com/admin/accounts/payment/single/',
                    'userId': 'https://admin.packzy.com/admin/merchant/profile/',
                    'ticketId': 'https://admin.packzy.com/admin/support/single/',
                    'dispatchId': 'https://admin.packzy.com/admin/dispatch/show/', // আপনার দেওয়া 'dispatchtId' কে 'dispatchId' করা হয়েছে
                    'riderRating': 'https://admin.packzy.com/admin/rider/ratings/single/',
                    'riderNumber': 'https://admin.packzy.com/admin/deliveryman/'
                };

                // ইনপুট আইডি অনুযায়ী URL নেওয়া হচ্ছে
                var url = urlMap[inputId] + encodeURIComponent(searchWord);

                // নতুন একটি ট্যাবে URL টি খোলা হচ্ছে
                window.open(url, '_blank');
            }
        }
