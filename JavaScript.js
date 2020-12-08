

<script>
    $.ajaxSetup({
            "contentType": "application/json"
        });
        var dataPayload = {"Sales Description":salesDescription, 
        "Sales Discount Amount":salesDiscountAmount, 
        "Sales Code":salesCode,
         "Sales Restriction Switch":salesRestrictionSwitch, 
         "Sales Restriction Count":salesRestrictionCount, 
         "Customer Restriction Switch":customerRestrictionSwitch, 
         "Customer Restriction Count": customerRestrictionCount};
       $.post('http://ec2-34-220-78-150.us-west-2.compute.amazonaws.com:8080/nav-insider-api/promotions/profile', JSON.stringify(dataPayload))
                .done(function (response) {
                    document.getElementById("salesDescription").value="";
                    document.getElementById("salesDiscountAmount").value="";
                    document.getElementById("salesCode").value="";
                    document.getElementById("salesRestrictionSwitch").value="";
                    document.getElementById("salesRestrictionCount").value="";
                    document.getElementById("customerRestrictionSwitch").value="";
    
                    if (response["operationResult"] === "SUCCESS")
                    {
                        $("#not-successful-result").attr("style", "display: none !important;");
                        $("#successful-result").attr("style", "display: block !important;");
                    } else {
                        $("#successful-result").attr("style", "display: none !important;");
                        $("#not-successful-result").attr("style", "display: block !important;");
                    }
                });
    
    </script>

    
