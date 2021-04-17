import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./scanItem.style";

let upc ='';
const info =
  {
  "request_info": {
    "success": true,
    "credits_used": 13,
    "credits_used_this_request": 1,
    "credits_remaining": 487,
    "credits_reset_at": "2021-05-16T22:24:28.000Z"
  },
  "request_metadata": {
    "created_at": "2021-04-16T23:32:31.578Z",
    "processed_at": "2021-04-16T23:32:36.425Z",
    "total_time_taken": 4.85,
    "amazon_url": "https://www.amazon.com/dp/B073JYC4XM?th=1&psc=1"
  },
  "request_parameters": {
    "type": "product",
    "amazon_domain": "amazon.com",
    "asin": "B073JYC4XM"
  },
  "product": {
    "title": "SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 100MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUAR-128G-GN6MA",
    "keywords": "SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 100MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUAR-128G-GN6MA,Western Digital Technologies Inc.,SDSQUAR-128G-GN6MA,SDSQUAR-128G-GN6MA",
    "keywords_list": [
      "SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 100MB/s",
      "Full HD",
      "Micro SD Card - SDSQUAR-128G-GN6MA",
      "Western Digital Technologies Inc.",
      "SDSQUAR-128G-GN6MA",
      "SDSQUAR-128G-GN6MA"
    ],
    "asin": "B073JYC4XM",
    "parent_asin": "B08CLNX58K",
    "link": "https://www.amazon.com/SanDisk-128GB-microSDXC-Memory-Adapter/dp/B073JYC4XM",
    "brand": "SanDisk",
    "protection_plans": [
      {
        "asin": "B011WVRN8M",
        "title": "3-year Photo and Data Recovery Plan",
        "price": {
          "symbol": "$",
          "value": 4.99,
          "currency": "USD",
          "raw": "$4.99"
        }
      },
      {
        "asin": "B00VF4OKXI",
        "title": "2-year Photo and Data Recovery Plan",
        "price": {
          "symbol": "$",
          "value": 3.99,
          "currency": "USD",
          "raw": "$3.99"
        }
      }
    ],
    "add_an_accessory": [
      {
        "asin": "B08HSKNTCM",
        "title": "TurboTax Deluxe 2020 Desktop Tax Software, Federal...",
        "price": {
          "symbol": "$",
          "value": 49.99,
          "currency": "USD",
          "raw": "$49.99"
        }
      },
      {
        "asin": "B08HSJWMDX",
        "title": "TurboTax Premier 2020 Desktop Tax Software, Federa...",
        "price": {
          "symbol": "$",
          "value": 69.9,
          "currency": "USD",
          "raw": "$69.90"
        }
      },
      {
        "asin": "B08HSJ7CTV",
        "title": "TurboTax Home & Business Desktop 2020 Tax Software...",
        "price": {
          "symbol": "$",
          "value": 79.99,
          "currency": "USD",
          "raw": "$79.99"
        }
      }
    ],
    "variants": [
      {
        "asin": "B073K14CVB",
        "title": "16GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B073K14CVB?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "16GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/817bIBcTSeL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/91hH0JJ3ExL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/918QjkNVwmL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/81UD9h9vcVL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/81GcG1pXrbL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B07SC7BZHR",
        "title": "512GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B07SC7BZHR?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "512GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/51M8MhwRbjL._AC_SL1000_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/51M8MhwRbjL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/61khVvfd-eL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/61RaVP7OhIL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/61E-hEaqs0L._AC_SL1000_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/71oA4VYRZCL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B07TV6Z24G",
        "title": "64GB + 32GB Bundle",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B07TV6Z24G?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "64GB + 32GB Bundle"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/718OXH7Qn8L._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/718OXH7Qn8L._AC_SL1500_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/61TPoMI1NZL._AC_SL1100_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/61blCJHJN2L._AC_SL1100_.jpg"
          }
        ]
      },
      {
        "asin": "B07TS2ZTVH",
        "title": "128GB + 32GB Bundle",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B07TS2ZTVH?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "128GB + 32GB Bundle"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/71moel+-RGL._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/71moel+-RGL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/61iWTnvk0xL._AC_SL1100_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/61blCJHJN2L._AC_SL1100_.jpg"
          }
        ]
      },
      {
        "asin": "B073JYVKNX",
        "title": "64GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B073JYVKNX?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "64GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/51IEVgCe89L._AC_SL1044_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/51IEVgCe89L._AC_SL1044_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/81YYTDx57EL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/61IWJpxxaXL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/61Q0Lib8hDL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/71rsbAsZUdL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/81GcG1pXrbL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B073JWXGNT",
        "title": "32GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B073JWXGNT?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "32GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/61wtfkbzUIL._AC_SL1093_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/61wtfkbzUIL._AC_SL1093_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/61hcNHGpjqL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/A1fyIGMO0TL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/91Q-GWxi4WL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/81pywuVPpNL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B073JYC4XM",
        "title": "128GB",
        "is_current_product": true,
        "link": "https://www.amazon.com/dp/B073JYC4XM?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "128GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/617NtexaW2L._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/617NtexaW2L._AC_SL1500_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/71cs-unZZqL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/61P3Jhyw2DL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/61Cu4fF1MBL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/81ffX34OsAL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B084J4GNW7",
        "title": "16GB + 32GB Bundle",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B084J4GNW7?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "16GB + 32GB Bundle"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/71j8vyIPowL._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/71j8vyIPowL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B074RNRM2B",
        "title": "400GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B074RNRM2B?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "400GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/81ZJNPHvCvL._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/81ZJNPHvCvL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/81B9a0lxFzL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/91wY05Ru0pL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/81WAgH3k2QL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/71ORkt9gizL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B089DPCJS1",
        "title": "16GB (3 Pack)",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B089DPCJS1?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "16GB (3 Pack)"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/817IttnC4lL._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/817IttnC4lL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B087JCL881",
        "title": "32GB (2 Pack)",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B087JCL881?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "32GB (2 Pack)"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/71QbhH9dKSL._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/71QbhH9dKSL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B073JY5T7T",
        "title": "200GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B073JY5T7T?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "200GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/61qM0eBF+GL._AC_SL1000_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/61qM0eBF+GL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/81mqKfZ4DiL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/91Pc83rK-CL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/61mXjYApX+L._AC_SL1000_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/71pDGlm4uJL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B0758NHWS8",
        "title": "256GB",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B0758NHWS8?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "256GB"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/619jta1rF4L._AC_SL1000_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/619jta1rF4L._AC_SL1000_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/61ccMqACxtL._AC_SL1000_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/A1II3BfoIYL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT03",
            "link": "https://m.media-amazon.com/images/I/8121G3lXZxL._AC_SL1500_.jpg"
          },
          {
            "variant": "PT04",
            "link": "https://m.media-amazon.com/images/I/711NG8fD-5L._AC_SL1500_.jpg"
          },
          {
            "variant": "PT05",
            "link": "https://m.media-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg"
          }
        ]
      },
      {
        "asin": "B07TYHXYNC",
        "title": "64GB + 128GB Bundle",
        "is_current_product": false,
        "link": "https://www.amazon.com/dp/B07TYHXYNC?th=1&psc=1",
        "dimensions": [
          {
            "name": "Capacity",
            "value": "64GB + 128GB Bundle"
          }
        ],
        "main_image": "https://m.media-amazon.com/images/I/71Qffmzl86L._AC_SL1500_.jpg",
        "images": [
          {
            "variant": "MAIN",
            "link": "https://m.media-amazon.com/images/I/71Qffmzl86L._AC_SL1500_.jpg"
          },
          {
            "variant": "PT01",
            "link": "https://m.media-amazon.com/images/I/61iWTnvk0xL._AC_SL1100_.jpg"
          },
          {
            "variant": "PT02",
            "link": "https://m.media-amazon.com/images/I/61TPoMI1NZL._AC_SL1100_.jpg"
          }
        ]
      }
    ],
    "categories": [
      {
        "name": "Electronics"
      },
      {
        "name": "Electronics",
        "link": "https://www.amazon.com/electronics-store/b/ref=dp_bc_aui_C_1?ie=UTF8&node=172282"
      },
      {
        "name": "Computers & Accessories",
        "link": "https://www.amazon.com/computer-pc-hardware-accessories-add-ons/b/ref=dp_bc_aui_C_2?ie=UTF8&node=541966"
      },
      {
        "name": "Computer Accessories & Peripherals",
        "link": "https://www.amazon.com/Computer-Accessories-Supplies/b/ref=dp_bc_aui_C_3?ie=UTF8&node=172456"
      },
      {
        "name": "Memory Cards",
        "link": "https://www.amazon.com/Memory-Cards-Computer-Add-Ons-Computers/b/ref=dp_bc_aui_C_4?ie=UTF8&node=516866"
      },
      {
        "name": "Micro SD Cards",
        "link": "https://www.amazon.com/Micro-SD-Memory-Cards/b/ref=dp_bc_aui_C_5?ie=UTF8&node=3015433011"
      }
    ],
    "description": "PRODUCT DESCRIPTION\nCapacity:128GBSanDisk Ultra microSDXC and microSDHC cards are fast for better pictures, app performance, and Full HD video. Ideal for Android smartphones and tablets, these A1-rated cards load apps faster for a better smartphone experience. Available in capacities up to 400GB, you have the capacity to take more pictures and Full HD video and capture life at its fullest. Built to perform in harsh conditions, SanDisk Ultra microSD cards are waterproof, temperature proof, shockproof, and X-ray proof. The microSD card is also rated Class 10 for Full HD video recording performance and a 10-year limited warranty. 1GB=1,000,000,000 bytes. Actual user storage less. (For 64GB-256GB): Up to 100MB/s read speed; write speed lower. (For 16GB-32GB): Up to 98MB/s read speed; write speed lower. Based on internal testing; performance may be lower depending on host device, interface, usage conditions and other factors. 1MB=1,000,000 bytes. (1) Full HD (1920x1080) video support may vary based upon host device, file attributes, and other factors. (2) Card only. (3) Results may vary based on host device, app type and other factors. (4) Download and installation required. (5) Based on 4.1GB transfer of photos (Average file 3.5MB) with USB 3.0 reader. Results may vary based on host device, file attributes and other factors. 6) Approximations; results and Full HD (1920x1080) video support may vary based on host device, file attributes and other factors.",
    "promotions_feature": " * Amazon Business: Make the most of your Amazon Business account with exclusive tools and savings. Login now\n * Amazon Business : For business-only pricing, quantity discounts and FREE Shipping. Register a free business account\n *",
    "a_plus_content": {
      "has_a_plus_content": true,
      "third_party": false
    },
    "sub_title": {
      "text": "Visit the SanDisk Store",
      "link": "https://www.amazon.com/stores/SanDisk/page/CD971F4B-EE23-4EA1-96E3-567678AC9C0A?ref_=ast_bln"
    },
    "has_coupon": false,
    "rating": 4.7,
    "rating_breakdown": {
      "five_star": {
        "percentage": 84,
        "count": 540395
      },
      "four_star": {
        "percentage": 10,
        "count": 64332
      },
      "three_star": {
        "percentage": 3,
        "count": 19299
      },
      "two_star": {
        "percentage": 1,
        "count": 6433
      },
      "one_star": {
        "percentage": 2,
        "count": 12866
      }
    },
    "ratings_total": 643328,
    "main_image": {
      "link": "https://images-na.ssl-images-amazon.com/images/I/617NtexaW2L.jpg"
    },
    "images": [
      {
        "link": "https://images-na.ssl-images-amazon.com/images/I/617NtexaW2L._AC_SL1500_.jpg",
        "variant": "MAIN"
      },
      {
        "link": "https://images-na.ssl-images-amazon.com/images/I/71cs-unZZqL._AC_SL1500_.jpg",
        "variant": "PT01"
      },
      {
        "link": "https://images-na.ssl-images-amazon.com/images/I/61P3Jhyw2DL._AC_SL1000_.jpg",
        "variant": "PT02"
      },
      {
        "link": "https://images-na.ssl-images-amazon.com/images/I/61Cu4fF1MBL._AC_SL1000_.jpg",
        "variant": "PT03"
      },
      {
        "link": "https://images-na.ssl-images-amazon.com/images/I/81ffX34OsAL._AC_SL1500_.jpg",
        "variant": "PT04"
      },
      {
        "link": "https://images-na.ssl-images-amazon.com/images/I/61c0HMo4mhL._AC_SL1500_.jpg",
        "variant": "PT05"
      }
    ],
    "images_count": 6,
    "videos": [
      {
        "duration_seconds": 34,
        "width": 854,
        "height": 480,
        "link": "https://d2y5sgsy8bbmb8.cloudfront.net/5c1181fe-7c83-4436-a466-0021e84ef18e/default.jobtemplate.mp4.480.mp4",
        "thumbnail": "https://m.media-amazon.com/images/I/51hoTKyxlxL.SX522_.jpg",
        "is_hero_video": false,
        "variant": "MAIN"
      }
    ],
    "videos_count": 1,
    "feature_bullets": [
      "Ideal for Android Smartphones and Tablets. Certified to work with Chromebooks. (This product has been certified to meet Google’s compatibility standards. Chromebook and the “Works with Chromebook” badge are trademarks of Google LLC.)",
      "Capacities up to 512GB (1GB=1,000,000,000 bytes. Actual user storage less) to store even more hours of Full HD video (Approximations; results and Full HD (1920x1080) video support may vary based on host device, file attributes and other factors.)",
      "Up to 100MB/s transfer read speed (Based on internal testing; performance may be lower depending on host device, interface, usage conditions and other factors.) lets you move up to 1000 photos in a minute (Based on 4.1GB transfer of photos (Average file 3.5MB) with USB 3.0 reader. Results may vary based on host device, file attributes and other factors.)",
      "Load apps faster with A1-rated performance (A1 performance is 1500 read IOPS, 500 write IOPS. Based on internal testing. Results may vary based on host device, app type and other factors.)",
      "Class 10 for Full HD video recording and playback (Full HD (1920x1080) video support may vary based upon host device, file attributes, and other factors.)",
      "SanDisk Memory Zone app for easy file management (Download and Installation Required)",
      "10-year limited manufacturer warranty",
      "Order with your Alexa enabled device. Just ask \"Alexa, order SanDisk microSD.\""
    ],
    "feature_bullets_count": 8,
    "feature_bullets_flat": "Order with your Alexa enabled device. Just ask \"Alexa, order SanDisk microSD.\". 10-year limited manufacturer warranty. SanDisk Memory Zone app for easy file management (Download and Installation Required). Class 10 for Full HD video recording and playback (Full HD (1920x1080) video support may vary based upon host device, file attributes, and other factors.). Load apps faster with A1-rated performance (A1 performance is 1500 read IOPS, 500 write IOPS. Based on internal testing. Results may vary based on host device, app type and other factors.). Up to 100MB/s transfer read speed (Based on internal testing; performance may be lower depending on host device, interface, usage conditions and other factors.) lets you move up to 1000 photos in a minute (Based on 4.1GB transfer of photos (Average file 3.5MB) with USB 3.0 reader. Results may vary based on host device, file attributes and other factors.). Capacities up to 512GB (1GB=1,000,000,000 bytes. Actual user storage less) to store even more hours of Full HD video (Approximations; results and Full HD (1920x1080) video support may vary based on host device, file attributes and other factors.). Ideal for Android Smartphones and Tablets. Certified to work with Chromebooks. (This product has been certified to meet Google’s compatibility standards. Chromebook and the “Works with Chromebook” badge are trademarks of Google LLC.).",
    "attributes": [
      {
        "name": "Brand",
        "value": "SanDisk"
      },
      {
        "name": "Flash Memory Type",
        "value": "Micro SD"
      },
      {
        "name": "Hardware Interface",
        "value": "MicroSDXC"
      },
      {
        "name": "Secure Digital Association Speed Class",
        "value": "Class 10"
      },
      {
        "name": "Memory Storage Capacity",
        "value": "128 GB"
      }
    ],
    "buybox_winner": {
      "offer_id": "smjclSv9AnyQbIXAnJaSQeifjH/pLVcIsSbmcpz9IjI6UxSWZua6VZJZjZmGGXIfwJBaGaaoC6PM3QRHr9Uznvdsm0ZbJ0VV6BV7kISNpBP32FiJYhU7nybnsu0J6MFBhjmAqJVz7qDDdf+RL7SeXw==",
      "is_prime": true,
      "is_amazon_fresh": false,
      "condition": {
        "is_new": true
      },
      "availability": {
        "type": "in_stock",
        "raw": "In Stock.",
        "dispatch_days": 1
      },
      "fulfillment": {
        "type": "1p",
        "is_sold_by_amazon": true,
        "is_fulfilled_by_amazon": true,
        "is_fulfilled_by_third_party": false,
        "is_sold_by_third_party": false
      },
      "price": {
        "symbol": "$",
        "value": 21.76,
        "currency": "USD",
        "raw": "$21.76"
      },
      "rrp": {
        "symbol": "$",
        "value": 22.91,
        "currency": "USD",
        "raw": "$22.91"
      },
      "save": {
        "symbol": "$",
        "value": 1.15,
        "currency": "USD",
        "raw": "$1.15"
      },
      "shipping": {
        "raw": "Get Fast. Free Shipping with Amazon Prime"
      }
    },
    "more_buying_choices": [
      {
        "price": {
          "symbol": "$",
          "value": 19.95,
          "currency": "USD",
          "raw": "$19.95"
        },
        "seller_name": "CalvinNHobbs",
        "seller_link": "https://www.amazon.com/gp/product/du/mbc-seller-information.html/ref=dp_mbc_info_0?c=new&a=B073JYC4XM&me=A2NDNAPHQ3UDKH&brand=SanDisk&productGroupID=pc_display_on_website&isUDP=1&isAGS=0&uniqueMerchantOfferKey=bmV3JHxBMk5ETkFQSFEzVURLSCR8U2FuRGlzayBTRFNRVUFSLTEyOEcgMTI4R0IgTVNEIHcvQWRhcCR8QTJORE5BUEhRM1VES0gkfHB1cmNoYXNhYmxlJHxBTEw=",
        "free_shipping": true,
        "position": 1
      },
      {
        "price": {
          "symbol": "$",
          "value": 20.99,
          "currency": "USD",
          "raw": "$20.99"
        },
        "seller_name": "MemoryWhiz",
        "seller_link": "https://www.amazon.com/gp/product/du/mbc-seller-information.html/ref=dp_mbc_info_1?c=new&a=B073JYC4XM&me=A02211013Q5HP3OMSZC7W&brand=SanDisk&productGroupID=pc_display_on_website&isUDP=1&isAGS=0&uniqueMerchantOfferKey=bmV3JHxBMDIyMTEwMTNRNUhQM09NU1pDN1ckfFNEU1FVQTQtMTI4Ry0xJHxBM0NHVE5DV1BFNURMWCR8cHVyY2hhc2FibGUkfEFMTA==",
        "position": 2
      },
      {
        "price": {
          "symbol": "$",
          "value": 21.34,
          "currency": "USD",
          "raw": "$21.34"
        },
        "seller_name": "eTECH",
        "seller_link": "https://www.amazon.com/gp/product/du/mbc-seller-information.html/ref=dp_mbc_info_2?c=new&a=B073JYC4XM&me=A3QF16EH69HELL&brand=SanDisk&productGroupID=pc_display_on_website&isUDP=1&isAGS=0&uniqueMerchantOfferKey=bmV3JHxBM1FGMTZFSDY5SEVMTCR8U0sgMTI4Ry8xMDBNIFVsdHJhIEExIFRGIHcvQSAoU0RTUVVBUikkfEEzUUYxNkVINjlIRUxMJHxwdXJjaGFzYWJsZSR8QUxM",
        "free_shipping": true,
        "position": 3
      }
    ],
    "specifications": [
      {
        "name": "RAM",
        "value": "128 GB"
      },
      {
        "name": "Memory Speed",
        "value": "100 Megabytes Per Second"
      },
      {
        "name": "Brand",
        "value": "SanDisk"
      },
      {
        "name": "Series",
        "value": "SanDisk Ultra 128GB microSDXC UHS-I card with Adapter - SDSQUAR-128G-GN6MA"
      },
      {
        "name": "Item model number",
        "value": "SDSQUAR-128G-GN6MA"
      },
      {
        "name": "Item Weight",
        "value": "0.16 ounces"
      },
      {
        "name": "Product Dimensions",
        "value": "0.03 x 0.59 x 0.43 inches"
      },
      {
        "name": "Item Dimensions  LxWxH",
        "value": "0.03 x 0.59 x 0.43 inches"
      },
      {
        "name": "Department",
        "value": "Memory"
      },
      {
        "name": "Manufacturer",
        "value": "Western Digital Technologies Inc."
      },
      {
        "name": "ASIN",
        "value": "B073JYC4XM"
      },
      {
        "name": "Is Discontinued By Manufacturer",
        "value": "No"
      },
      {
        "name": "Date First Available",
        "value": "August 3, 2017"
      },
      {
        "name": "Customer Reviews",
        "value": "4.7 out of 5 stars643,328 ratings4.7 out of 5 stars"
      },
      {
        "name": "Best Sellers Rank",
        "value": "#12 in Micro SD Memory Cards"
      },
      {
        "name": "Flash Memory Type",
        "value": "Micro SD"
      },
      {
        "name": "Hardware Interface",
        "value": "MicroSDXC"
      },
      {
        "name": "Secure Digital Association Speed Class",
        "value": "Class 10"
      },
      {
        "name": "Memory Storage Capacity",
        "value": "128 GB"
      }
    ],
    "specifications_flat": "Memory Storage Capacity: 128 GB. Secure Digital Association Speed Class: Class 10. Hardware Interface: MicroSDXC. Flash Memory Type: Micro SD. Best Sellers Rank: #12 in Micro SD Memory Cards. Customer Reviews: 4.7 out of 5 stars643,328 ratings4.7 out of 5 stars. Date First Available: August 3, 2017. Is Discontinued By Manufacturer: No. ASIN: B073JYC4XM. Manufacturer: Western Digital Technologies Inc. Department: Memory. Item Dimensions  LxWxH: 0.03 x 0.59 x 0.43 inches. Product Dimensions: 0.03 x 0.59 x 0.43 inches. Item Weight: 0.16 ounces. Item model number: SDSQUAR-128G-GN6MA. Series: SanDisk Ultra 128GB microSDXC UHS-I card with Adapter - SDSQUAR-128G-GN6MA. Brand: SanDisk. Memory Speed: 100 Megabytes Per Second. RAM: 128 GB.",
    "bestsellers_rank": [
      {
        "category": "Micro SD Memory Cards",
        "rank": 12,
        "link": "https://www.amazon.com/gp/bestsellers/pc/3015433011/ref=pd_zg_hrsr_pc"
      }
    ],
    "manufacturer": "Western Digital Technologies Inc.",
    "weight": "0.16 ounces",
    "first_available": {
      "raw": "August 3, 2017",
      "utc": "2017-08-03T12:00:00.000Z"
    },
    "dimensions": "0.03 x 0.59 x 0.43 inches",
    "model_number": "SDSQUAR-128G-GN6MA"
  },
  "frequently_bought_together": {
    "total_price": {
      "symbol": "$",
      "value": 171.74,
      "currency": "USD",
      "raw": "$171.74"
    },
    "products": [
      {
        "asin": "B07PM2NBGT",
        "title": "Wireless Rechargeable Battery Powered WiFi Camera, Home Security Camera, Night Vision, Indoor/Outdoor, 1080P Video with Motion Detection, 2-Way Audio, Waterproof, compatible with Cloud Storage/SD Slot",
        "link": "https://www.amazon.com/Wireless-Rechargeable-Detection-Waterproof-compatible/dp/B07PM2NBGT/ref=pd_bxgy_img_2/136-7387730-0043322?_encoding=UTF8&pd_rd_i=B07PM2NBGT&pd_rd_r=40aa1c1c-664e-4089-9314-5c579b0e7e7e&pd_rd_w=860aN&pd_rd_wg=PcT52&pf_rd_p=fd3ebcd0-c1a2-44cf-aba2-bbf4810b3732&pf_rd_r=5GFEH24FC61KRVFEQY9B&psc=1&refRID=5GFEH24FC61KRVFEQY9B",
        "price": {
          "symbol": "$",
          "value": 69.99,
          "currency": "USD",
          "raw": "$69.99"
        }
      },
      {
        "asin": "B0816RV4BF",
        "title": "Wireless Outdoor WiFi Security Camera, Rechargeable Battery-Powered Home Security Camera, 1080P Night Vision/Waterproof, PIR Motion Detection, 2-Way Audio, Compatible with Cloud Storage/SD Slot",
        "link": "https://www.amazon.com/Rechargeable-Battery-Powered-Waterproof-Detection-Compatible/dp/B0816RV4BF/ref=pd_bxgy_img_3/136-7387730-0043322?_encoding=UTF8&pd_rd_i=B0816RV4BF&pd_rd_r=40aa1c1c-664e-4089-9314-5c579b0e7e7e&pd_rd_w=860aN&pd_rd_wg=PcT52&pf_rd_p=fd3ebcd0-c1a2-44cf-aba2-bbf4810b3732&pf_rd_r=5GFEH24FC61KRVFEQY9B&psc=1&refRID=5GFEH24FC61KRVFEQY9B",
        "price": {
          "symbol": "$",
          "value": 79.99,
          "currency": "USD",
          "raw": "$79.99"
        }
      }
    ]
  }
};

const ScanItem = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    upc = data;
    if(info.request_info.success){
    Alert.alert('Item Found',' ',
        [
          {
            text:'Cancel' ,
            onPress:()=>{
              console.log("###########CANCEL######################");
              console.log(`Info ${ info.request_info.success }`);
            },
          },
          {
            text:'Add Item' ,
            onPress:()=>{
              const description=info.product.description;
              const title=info.product.title;
              const category= info.product.categories[0].name;
              const price= info.product.buybox_winner.price.value;
              console.log(description);
              console.log(title);
              console.log(category);
              console.log(price);
              props.navigation.navigate("AddItemScreen",{description,title,category,price});
            },
          },
        ],
        {
          calcelable:false,
        },
      );
    }else{
      Alert.alert('The Item Was not found ',' ',
        [
          {
            text:'Retry' ,
            onPress:()=>{
              console.log("###########CANCEL######################");
              console.log(`Info ${ info.request_info.success }`);
            },
          },
          {
            text:'Add Item Manually' ,
            onPress:()=>{
              props.navigation.navigate("addItem");
            },
          },
        ],  
        {
          cancelable:false,
        }
      );    
    }  
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const axios = require('axios');

  // set up the request parameters
  const params = {
    api_key: "06216450BA1844B4A86EC6E8C8D8DE05",
    type: "product",
    amazon_domain: "amazon.com",
    gtin: upc,
    device: "mobile"
  }
  // console.log(params);

  // make the http GET request to Rainforest API
  axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {
      // print the JSON response from Rainforest API
      console.log(JSON.stringify(response.data, 0, 2));

    }).catch(error => {
      // catch and print the error
      console.log(error);
    })

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}

export default ScanItem;