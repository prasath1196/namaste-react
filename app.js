import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
          <img
            className="logo" 
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name, cuisines,avgRating,costForTwo,deliveryTime} = resData?.data
  return(
    <div className="res-card">
      <div className="res-image-container">
        <img
          className='res-logo'
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
          />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo /100}</h4>
      <h4>{deliveryTime}  </h4>

    </div>
  )
}

const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "706726",
      "name": "Toscano",
      "uuid": "767ea269-a96b-453a-897b-380651faebe1",
      "city": "8",
      "area": "Phoenix Market City",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "e728bf95fe9106ab0ca87cbb895bef62",
      "cuisines": [
        "Italian",
        "Pizzas",
        "Pastas",
        "Continental",
        "Desserts",
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 100000,
      "costForTwoString": "₹1000 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 2.4000000953674316,
      "slugs": {
        "restaurant": "toscano-velachey-velachery",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "Phoenix Market City, Unit No. UG28, D/N. 142, Velachery Main Road, Velachery , Chennai 600042, Chennai Corp. Ward - 174, Chennai, Tamil Nadu-600042",
      "locality": "Velachey",
      "parentId": 22481,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7030640~p=1~eid=00000188-8740-2586-11a8-b5c300da0150",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "706726",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 2.4000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 20,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "25092",
      "name": "Moonlight Takeaway",
      "uuid": "2a6bf4f4-b5e6-42d2-9aa0-7d130327d75a",
      "city": "8",
      "area": "Perungudi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "cfggd8kxpyentvj4jh6x",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Indian",
        "Ice Cream",
        "South Indian",
        "Grill",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 6.800000190734863,
      "slugs": {
        "restaurant": "moonlight-takeaway-kandanchavadi-omr-perungudi",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "5/204, Lakshman Nagar, Kandanchavadi, Next To Poorvika Mobiles Perungudi, Perungudi, Chennai",
      "locality": "Kandanchavadi",
      "parentId": 11817,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "25092",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 6.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "54472",
      "name": "Hotel Santosi",
      "uuid": "2ce7b1ac-2fda-422d-9d93-7425e2741c41",
      "city": "8",
      "area": "Ramapuram",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "bzykgwhz9pywsgrdijq5",
      "cuisines": [
        "North Indian",
        "Chinese",
        "South Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 8.600000381469727,
      "slugs": {
        "restaurant": "hotel-santosi-ramapuram-ramapuram",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "4/323, Valluvar Salai, Ramapuram, Chennai - 600089",
      "locality": "",
      "parentId": 17784,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "54472",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 8.600000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "553569",
      "name": "CHENNAI AAGARAM",
      "uuid": "5ff627c8-60ae-4922-b943-9f26129f083e",
      "city": "8",
      "area": "OMR-Perungudi",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "bs0bhlylijprwwwgcd1v",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 8.199999809265137,
      "slugs": {
        "restaurant": "chennai-aagaram-omr-perungudi-omr-perungudi",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "No. 06, 200 Feet Radial Rd, Seevaram, Thoraipakkam, Tamil Nadu 600097, India",
      "locality": "Seevaram",
      "parentId": 332921,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6986388~p=4~eid=00000188-8740-2586-11a8-b5c400da041b",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.1 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "553569",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 8.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "9798",
      "name": "Burger King",
      "uuid": "310721f3-7d5c-4289-8e1c-873832564069",
      "city": "8",
      "area": "Velachery",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 50,
      "minDeliveryTime": 50,
      "maxDeliveryTime": 50,
      "slaString": "50 MINS",
      "lastMileTravel": 2.200000047683716,
      "slugs": {
        "restaurant": "burger-king-velachery",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "142, 2ND FLOOR , Velachery Rd, Indira Gandhi Nagar, Velachery, Chennai, Tamil Nadu 600042",
      "locality": "Pheonix Marketcity",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "9798",
        "deliveryTime": 50,
        "minDeliveryTime": 50,
        "maxDeliveryTime": 50,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "35172",
      "name": "Zaitoon",
      "uuid": "155ec8fc-4c3d-4262-b4bf-defb6d84600f",
      "city": "8",
      "area": "Velachery",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "dhhxpnn5rt2uysasbzqq",
      "cuisines": [
        "Biryani",
        "Juices",
        "North Indian",
        "Chinese",
        "Arabian",
        "Mughlai"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "zaitoon-velachery-velachery-2",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "362, Velachery Main Road, Velachery, Chennai, Tamil Nadu 600042",
      "locality": "Main Road",
      "parentId": 4555,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "35172",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "13492",
      "name": "Bengali fun Foods",
      "uuid": "7f833003-f1ab-49a9-b26f-cbed260208b0",
      "city": "8",
      "area": "Perungudi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "vkbogd9qo3ohrfvcoxur",
      "cuisines": [
        "Bengali"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 5.800000190734863,
      "slugs": {
        "restaurant": "bengali-fun-foods-omr-perungudi-omr-perungudi",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "16, MGR Pradhana Salai, Kanchanchavdi, Chennai, Tamil Nadu 600096",
      "locality": "Kandanchavadi",
      "parentId": 2600,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6999507~p=7~eid=00000188-8740-2586-11a8-b5c500da070f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "13492",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 5.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "140284",
      "name": "Simply Kebab",
      "uuid": "4d8c539c-f662-47b8-96c8-9166c875c476",
      "city": "8",
      "area": "Perungudi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "a81fa75a64b11101b080b7582724ed67",
      "cuisines": [
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "simply-kebab-kandhanchavedi-vam",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "10,omr food street,MGR road,kandhanchavadi",
      "locality": "Mgr Road",
      "parentId": 188176,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7007806~p=10~eid=00000188-8740-2586-11a8-b5c600da0a79",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "140284",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "17818",
      "name": "KFC",
      "uuid": "65bec275-76f4-4a78-a92e-e8ef67d92e76",
      "city": "8",
      "area": "Velachery",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "kfc-vijaya-nagar-velachery",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "185, 3rd Cross Street, Thambaram Main Road, Vijaya Nagar, Velachery, Chennai",
      "locality": "Vijaya Nagar",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "17818",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "37626",
      "name": "Sangeetha Veg Restaurant",
      "uuid": "fcc238dc-f292-4d62-a8ad-d6778118446b",
      "city": "8",
      "area": "St. Thomas Mount",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "dpcd0busd8jvj6urotka",
      "cuisines": [
        "Chinese",
        "Indian",
        "North Indian",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "sangeetha-veg-restaurant-alandur-guindy",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "9, GST Road, Alandur, Chennai",
      "locality": "Gst Road",
      "parentId": 1260,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "37626",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "523075",
      "name": "Chai Waale",
      "uuid": "10777692-2311-401d-8c30-b23be182e848",
      "city": "8",
      "area": "Adambakkam",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "j0zdloae6fctd9gfecjp",
      "cuisines": [
        "Beverages",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "chai-waale-madipakkam-madipakkam",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "28, Lakeview Rd, Paramesh Nagar, Adambakkam, Chennai, Tamil Nadu 600088",
      "locality": "Lakeview Rd",
      "parentId": 7228,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7018723~p=13~eid=00000188-8740-2586-11a8-b5c700da0d78",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "523075",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.6",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "231438",
      "name": "Salem RR Biriyani Restaurant",
      "uuid": "6bd045e2-63ed-4316-acf5-78b87038eb6a",
      "city": "8",
      "area": "Thuraipakkam",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "mnuyff4zlt20mqarqo34",
      "cuisines": [
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 9.899999618530273,
      "slugs": {
        "restaurant": "salem-rr-biriyani-restaurant-karapakkam-karapakkam",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "No. 319, OMR Okkiyampet ,okkiyam , thuraipakkam , chennai",
      "locality": "Thuraipakkam",
      "parentId": 9923,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "9.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "231438",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 9.899999618530273,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "14670",
      "name": "Salem RR Biriyani Unavagam",
      "uuid": "420c26de-6185-46bc-98f4-0abb4b716385",
      "city": "8",
      "area": "Velachery",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "lmaqiwy39dleyfadfmnn",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Tandoor",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "salem-rr-biryani-unvagam-velachery-velachery",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "166,100 Feet Road, Ganapathi Nagar, Velachery, Chennai",
      "locality": "Ganapathi Nagar",
      "parentId": 176137,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "14670",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "350428",
      "name": "CakeZone",
      "uuid": "4e235777-a24e-40fa-a3ca-cf470df87652",
      "city": "8",
      "area": "Velachery",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "282232306783cce457d244219c341304",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "cakezone-velachery-velachery",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "NO.18/42, PILLAIYAR KOIL STREET, VELACHERY, CHENNAI, Chennai Corp. Ward - 177, Chennai, Tamil Nadu-600042",
      "locality": "Pillaiyar Koil Street",
      "parentId": 7003,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6948565~p=16~eid=00000188-8740-2586-11a8-b5c800da1038",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "350428",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "450729",
      "name": "Cake House",
      "uuid": "2f65619d-b288-4afb-af3b-98bdc4c9079f",
      "city": "8",
      "area": "Madipakkam",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "hqcghvsxz8zp0gzaqjpa",
      "cuisines": [
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "cake-house-madipakkam-madipakkam",
        "city": "chennai"
      },
      "cityState": "8",
      "address": "DOOR NO.48A, MEDAVAKKAM MAIN  ROAD, KEELKATTALAI,  MADIPAKKAM, Kancheepuram,  Tamil Nadu, 600091",
      "locality": "Keelkattalai",
      "parentId": 8539,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "450729",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  }
]

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map(restaurant => 
            <RestaurantCard key={restaurant?.data?.id}
            resData={restaurant}/>)
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
        <Header />
        <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
