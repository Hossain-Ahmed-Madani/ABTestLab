// Cart Api

async function fetchCartData() {
    const response = await fetch("https://www.steinertractor.com/api/carts/carts_read", {
        method: "GET",
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            // authorization: "Bearer your-token-here", // If needed
            "x-requested-with": "XMLHttpRequest",
        },
        credentials: "include",
    });

    return await response.json();
}

fetchCartData().then((res) => {
    console.log(res);
});

// null

const data = {
    "Modified": "2026-02-02T03:22:50.643",
    "CartId": 129753296980433,
    "CompanyName": "sdsdsdsd wewesd",
    "AccountId": 236091812344266,
    "DisplayAccountId": "8531034",
    "IsTaxable": "True",
    "ContactId": 3136355007269,
    "customer_email": "test@test12344.com",
    "B2BFlag": 0,
    "AccountTypeName": "RETAIL",
    "PastPurchases": false,
    "OnAccount": 0,
    "PromotionTotal": 0,
    "SubTotal": 227.93,
    "FreightTotal": 19.95,
    "OriginalTotal": 276.4,
    "Total": 276.4,
    "TaxTotal": 28.52,
    "PaymentAttempts": 1,
    "PaymentAttemptsThreshold": 3,
    "CartType": "Open Cart",
    "ShippingRateId": 226364586239154,
    "ShippingMethodId": 194435526197346,
    "ShippingMethod": "Blue Ribbon",
    "CarrierId": 69532428058414,
    "CarrierName": "Default",
    "FreightCollectNumber": "",
    "UnitTotals": [
        {
            "CartId": 129753296980433,
            "Quantity": 3,
            "UnitOfMeasureId": 257691240982340,
            "UnitOfMeasure": "Each"
        }
    ],
    "CartLine": [
        {
            "CartLineId": 26443445995972,
            "ProductId": 102766731300447,
            "Code": "ACS085GK",
            "SEOUrl": "ACS085GK-Manifold-Gasket-Set-Allis-Chalmers-WC-WF",
            "Name": "Manifold Gasket Set, Allis Chalmers, WC, WF",
            "UrlName": "Manifold-Gasket-Set,-Allis-Chalmers,-WC,-WF",
            "ProductType": "Sales Inventory",
            "ProductStatus": "Active",
            "BrandName": "Allis Chalmers",
            "CartLineType": "Product",
            "CartLineTypeId": 142296464222172,
            "Price": 17.99,
            "Amount": 17.99,
            "TaxCode": "MI",
            "Inventory": {
                "InventoryLocationId": 237431585304299,
                "LocationName": "Default",
                "Status": "Active",
                "OnHand": 126,
                "Available": 125
            },
            "Image": [
                {
                    "ProductId": 102766731300447,
                    "Code": "500",
                    "CdnUrl": "https://s7d2.scene7.com/is/image/SteinerTractor/ACS085GK?$lg$"
                }
            ],
            "UnitOfMeasure": [
                {
                    "CartLineId": 26443445995972,
                    "UnitOfMeasureId": 257691240982340,
                    "Name": "Each",
                    "Quantity": 1,
                    "Price": 17.99,
                    "DiscountAmount": 0,
                    "ListPrice": 17.99,
                    "Amount": 17.99,
                    "Inventory": [
                        {
                            "QuanityAvailible": 17,
                            "LocationName": "Default"
                        }
                    ]
                }
            ]
        },
        {
            "CartLineId": 19937188213292,
            "ProductId": 74671519047332,
            "Code": "ACS7342",
            "SEOUrl": "ACS7342-Front-Wheel-Bearing-Kit-with-Seal",
            "Name": "Front Wheel Bearing Kit with Seal, Allis Chalmers, 247801",
            "UrlName": "Front-Wheel-Bearing-Kit-with-Seal,-Allis-Chalmers,-247801",
            "ProductType": "Sales Inventory",
            "ProductStatus": "Active",
            "BrandName": "Allis Chalmers",
            "CartLineType": "Product",
            "CartLineTypeId": 142296464222172,
            "Price": 59.99,
            "Amount": 59.99,
            "TaxCode": "MI",
            "Inventory": {
                "InventoryLocationId": 237431585304299,
                "LocationName": "Default",
                "Status": "Active",
                "OnHand": 126,
                "Available": 125
            },
            "Image": [
                {
                    "ProductId": 74671519047332,
                    "Code": "500",
                    "CdnUrl": "https://s7d2.scene7.com/is/image/SteinerTractor/ACS7342?$lg$"
                }
            ],
            "UnitOfMeasure": [
                {
                    "CartLineId": 19937188213292,
                    "UnitOfMeasureId": 257691240982340,
                    "Name": "Each",
                    "Quantity": 1,
                    "Price": 59.99,
                    "DiscountAmount": 0,
                    "ListPrice": 59.99,
                    "Amount": 59.99,
                    "Inventory": [
                        {
                            "QuanityAvailible": 10,
                            "LocationName": "Default"
                        }
                    ]
                }
            ]
        },
        {
            "CartLineId": 241748164869272,
            "ProductId": 34917336569755,
            "Code": "IHS6081",
            "SEOUrl": "IHS6081-Upholstered-Bolt-On-Seat-Pan",
            "Name": "Upholstered Bolt-On Seat Pan",
            "UrlName": "Upholstered-Bolt-On-Seat-Pan",
            "ProductType": "Sales Inventory",
            "ProductStatus": "Active",
            "CartLineType": "Product",
            "CartLineTypeId": 142296464222172,
            "Price": 149.95,
            "Amount": 149.95,
            "TaxCode": "MI",
            "Inventory": {
                "InventoryLocationId": 237431585304299,
                "LocationName": "Default",
                "Status": "Active",
                "OnHand": 126,
                "Available": 125
            },
            "Image": [
                {
                    "ProductId": 34917336569755,
                    "Code": "500",
                    "CdnUrl": "https://s7d2.scene7.com/is/image/SteinerTractor/IHS6081?$lg$"
                }
            ],
            "UnitOfMeasure": [
                {
                    "CartLineId": 241748164869272,
                    "UnitOfMeasureId": 257691240982340,
                    "Name": "Each",
                    "Quantity": 1,
                    "Price": 149.95,
                    "DiscountAmount": 0,
                    "ListPrice": 149.95,
                    "Amount": 149.95,
                    "Inventory": [
                        {
                            "QuanityAvailible": 33,
                            "LocationName": "Default"
                        }
                    ]
                }
            ]
        }
    ],
    "Addresses": [
        {
            "CartAddressId": 34017693227525,
            "AccountId": 236091812344266,
            "ContactId": 3136355007269,
            "DisplayName": "Test First Name Test Last Name",
            "Address1": "Test Street 1",
            "Address2": "",
            "Address3": "",
            "PoBox": "",
            "City": "Dhaka",
            "StateId": 103677656561277,
            "State": "Alabama",
            "CountryId": 18705725075198,
            "Country": "United States",
            "PostalCode": "1207",
            "Phone": "0000000001",
            "IsBilling": true,
            "IsShipping": false,
            "AddressTypeId": 166677841986974,
            "IsValidated": true,
            "IsTaxable": true,
            "ExtendedFields": "{\"AddressCode\":\"TestS34017\", \"ShipMethod\":\"DEFAULT\"}",
            "ShipMethod": "DEFAULT",
            "OriginCode": "1",
            "WholesaleDefaultBilling": 0
        },
        {
            "CartAddressId": 98660831516694,
            "AccountId": 236091812344266,
            "ContactId": 3136355007269,
            "DisplayName": "Test First Name Test Last Name",
            "Address1": "Test Street 1",
            "Address2": "",
            "Address3": "",
            "PoBox": "",
            "City": "Dhaka",
            "StateId": 103677656561277,
            "State": "Alabama",
            "CountryId": 18705725075198,
            "Country": "United States",
            "PostalCode": "1207",
            "Phone": "0000000001",
            "IsBilling": false,
            "IsShipping": true,
            "AddressTypeId": 50989463651634,
            "IsValidated": true,
            "IsTaxable": true,
            "ExtendedFields": "{\"AddressCode\":\"TestS63650\", \"ShipMethod\":\"DEFAULT\"}",
            "ShipMethod": "DEFAULT",
            "OriginCode": "1",
            "WholesaleDefaultBilling": 0
        }
    ],
    "OptionalLineInfo": [
        {
            "Code": "BLIND",
            "ProductId": 390833602844,
            "Name": "BLIND SHIP FEE"
        },
        {
            "Code": "CAT",
            "ProductId": 206347380724399,
            "Name": "Steiner Tractor Parts Free Catalog"
        },
        {
            "Code": "CODFEE",
            "ProductId": 266640749597290,
            "Name": "Fee for Cash on Delivery collection"
        },
        {
            "Code": "RUSH",
            "ProductId": 213233605330926,
            "Name": "Rush Fee"
        }
    ]
}