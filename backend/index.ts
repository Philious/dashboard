import express from "express";
// import { v4 as uuidv4 } from 'uuid';
import cors from "cors";

const app = express();
const url = process.env.VITE_SERVER_PORT || 3000;
const delay = parseInt(process.env.VITE_DELAY ?? '0')
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);
// Middleware to parse JSON bodies
app.use(express.json());

app.listen(url, () => {
  console.log(`Server running at ${url}`);
});



/*
type Resp = express.Response<ResponseType, Record<string, unknown>>;

const rndBreak = (ofTen: number, ok: () => Resp, err: () => Resp) => {
  const rndBreak = Math.random() * 10 < ofTen;
  setTimeout(() => {
    if (!rndBreak) {
      ok()
    } else {
      err();
    }
  }, 300);
}
*/

app.get("/api/data", (req, res) => {
  const page = parseInt(req.query.page as string || "1", 10); // Default to page 1
  const limit = parseInt(req.query.limit as string || "10", 10); // Default to limit 10

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = tableData.data.slice(startIndex, endIndex);
  setTimeout(() => {
    res.json({
      headers: tableData.headers,
      data,
      hasMore: endIndex < tableData.data.length,
    });
  }, delay);
});

const tableData = {
  "headers": [
    {
      "id": "product",
      "cellType": "text",
      "title": "Product"
    },
    {
      "id": "price",
      "cellType": "currency",
      "title": "Price"
    },
    {
      "id": "category",
      "cellType": "category",
      "title": "Category"
    },
    {
      "id": "stock",
      "cellType": "availability",
      "title": "Stock"
    }
  ],
  "data": [
    {
      "rowId": "675c0c3ea29cda9c6996d317",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Musanpoly"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1215.39
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 352
        }
      ]
    },
    {
      "rowId": "675c0c3eacda10227c0a5342",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Immunics"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2108.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1020
        }
      ]
    },
    {
      "rowId": "675c0c3e4b53cce3902b0aec",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Letpro"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1636.37
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1455
        }
      ]
    },
    {
      "rowId": "675c0c3e0c0634c532f4f61a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kiosk"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 900.93
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1251
        }
      ]
    },
    {
      "rowId": "675c0c3e19bf6617a02cd4aa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Xerex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2153.52
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 535
        }
      ]
    },
    {
      "rowId": "675c0c3e19855ed4cfdfa52f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Olucore"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1657.1
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1222
        }
      ]
    },
    {
      "rowId": "675c0c3e63f6fe8dde47ad91",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Gallaxia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1648.63
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 307
        }
      ]
    },
    {
      "rowId": "675c0c3ee8b202407a58c3ee",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Deviltoe"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2424.99
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1373
        }
      ]
    },
    {
      "rowId": "675c0c3e480464afeb716f4f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ronelon"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1514.4
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 633
        }
      ]
    },
    {
      "rowId": "675c0c3e1134e31036e4459c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zorromop"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2145.16
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 405
        }
      ]
    },
    {
      "rowId": "675c0c3e8ee1e9b57b656547",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Enthaze"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1123.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 563
        }
      ]
    },
    {
      "rowId": "675c0c3e08c4319693dc9e86",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Omnigog"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2223.67
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1477
        }
      ]
    },
    {
      "rowId": "675c0c3e8144c9e3d37cc42e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Comstruct"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2243.31
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 145
        }
      ]
    },
    {
      "rowId": "675c0c3eb7f7ac48cd69332a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Emoltra"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2640.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 541
        }
      ]
    },
    {
      "rowId": "675c0c3efd4d9df8d1679dbd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Gluid"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 729.48
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1028
        }
      ]
    },
    {
      "rowId": "675c0c3e494039a20c361c1d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bedder"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 777.53
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 35
        }
      ]
    },
    {
      "rowId": "675c0c3eaa9b77125c6de209",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ontagene"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1821.41
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 473
        }
      ]
    },
    {
      "rowId": "675c0c3eea691b7f417193fa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Savvy"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1079.82
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 965
        }
      ]
    },
    {
      "rowId": "675c0c3ef19fe00cb78db4ee",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Empirica"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1477.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 397
        }
      ]
    },
    {
      "rowId": "675c0c3e8ffa4eefd5b2241e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Endicil"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2008.76
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 433
        }
      ]
    },
    {
      "rowId": "675c0c3eef5714873cb7afdc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Eargo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2408.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1310
        }
      ]
    },
    {
      "rowId": "675c0c3e12e3e3a38396ace4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exoplode"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 887.64
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 196
        }
      ]
    },
    {
      "rowId": "675c0c3e284399d3a0e42838",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Rugstars"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 877.45
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 882
        }
      ]
    },
    {
      "rowId": "675c0c3efc6a4cb858ba329f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pawnagra"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 522.65
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1460
        }
      ]
    },
    {
      "rowId": "675c0c3ed10afedb20a1c4cb",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Multiflex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1692.24
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1082
        }
      ]
    },
    {
      "rowId": "675c0c3e74fb0f8468a9ed2e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zenthall"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1468.23
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 945
        }
      ]
    },
    {
      "rowId": "675c0c3ebda29d0f7ffe5e8f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Firewax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 99.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 603
        }
      ]
    },
    {
      "rowId": "675c0c3e5b1a415e7d79f676",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Trasola"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 539.13
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1451
        }
      ]
    },
    {
      "rowId": "675c0c3e088284aa33b3228e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Utara"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2536.95
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1491
        }
      ]
    },
    {
      "rowId": "675c0c3ea963405928f3d3af",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zillactic"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1336.06
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 743
        }
      ]
    },
    {
      "rowId": "675c0c3eeac512a877ba6130",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Naxdis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1931.52
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 858
        }
      ]
    },
    {
      "rowId": "675c0c3e6998d0881b7ae34b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Matrixity"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2596.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1325
        }
      ]
    },
    {
      "rowId": "675c0c3e43c9c498d2e7a35f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Hivedom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 940.69
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1418
        }
      ]
    },
    {
      "rowId": "675c0c3e256702d3116fd509",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Liquicom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2840.07
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1415
        }
      ]
    },
    {
      "rowId": "675c0c3e42d6b55ccdb6694e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Roboid"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2696.89
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1473
        }
      ]
    },
    {
      "rowId": "675c0c3e49984d30931becd3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Synkgen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2852.48
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 53
        }
      ]
    },
    {
      "rowId": "675c0c3e49ab0b1ea3fa1718",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Protodyne"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2070.92
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 408
        }
      ]
    },
    {
      "rowId": "675c0c3e417acb35127c29ac",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digitalus"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2139.28
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 737
        }
      ]
    },
    {
      "rowId": "675c0c3e90719ce11bee27d9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Twiggery"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1060
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 122
        }
      ]
    },
    {
      "rowId": "675c0c3e04077d6e8490c100",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Koffee"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1437.72
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 147
        }
      ]
    },
    {
      "rowId": "675c0c3edaff6f41fcd28045",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Atgen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1852.17
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1128
        }
      ]
    },
    {
      "rowId": "675c0c3e59e8ddc6a8e7050f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Apextri"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1813.66
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1274
        }
      ]
    },
    {
      "rowId": "675c0c3e6aa3138cde985ced",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Phormula"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2495.61
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1462
        }
      ]
    },
    {
      "rowId": "675c0c3e88ce928769a2e582",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Marketoid"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1716.13
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1067
        }
      ]
    },
    {
      "rowId": "675c0c3e7a44300fc89a2ac0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zappix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1227.29
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 271
        }
      ]
    },
    {
      "rowId": "675c0c3ef5732deb054890f9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Hydrocom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2941.81
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 757
        }
      ]
    },
    {
      "rowId": "675c0c3e673fe7671b923804",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zboo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1088.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 95
        }
      ]
    },
    {
      "rowId": "675c0c3e8c4ffe5cfa28a5dd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Gynko"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 647.14
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 656
        }
      ]
    },
    {
      "rowId": "675c0c3e9fe874ee188c54da",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Fleetmix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 615.24
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 968
        }
      ]
    },
    {
      "rowId": "675c0c3e4c9d4b60d943f7e8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Rodeocean"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1080.58
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1414
        }
      ]
    },
    {
      "rowId": "675c0c3e208333a3316240c2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Steelfab"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1811.91
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 797
        }
      ]
    },
    {
      "rowId": "675c0c3ea3ea1719542ad51e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Waterbaby"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2291.56
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1030
        }
      ]
    },
    {
      "rowId": "675c0c3e0256fac8a4d0dc6d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Junipoor"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1126.19
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1111
        }
      ]
    },
    {
      "rowId": "675c0c3e3cdd22961016c7c4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Unia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1722.98
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 821
        }
      ]
    },
    {
      "rowId": "675c0c3ed1b54f24faa78342",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Medesign"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2234.95
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 709
        }
      ]
    },
    {
      "rowId": "675c0c3ee70b4449eba118fe",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Rockyard"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1990.83
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 51
        }
      ]
    },
    {
      "rowId": "675c0c3eeefffabab38ea926",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kegular"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1540.59
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 586
        }
      ]
    },
    {
      "rowId": "675c0c3ebd590e431641e6c0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Temorak"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2728.95
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 406
        }
      ]
    },
    {
      "rowId": "675c0c3e88fc44a8bb60ce47",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Daisu"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 622.13
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 915
        }
      ]
    },
    {
      "rowId": "675c0c3ec359511d973b14a8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zoinage"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2697.78
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1289
        }
      ]
    },
    {
      "rowId": "675c0c3e9aa30ef5715bad63",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Flexigen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 612.48
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 742
        }
      ]
    },
    {
      "rowId": "675c0c3e7417bf65f083476a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zillidium"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1022.3
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 309
        }
      ]
    },
    {
      "rowId": "675c0c3e0263227fc682d40b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Furnigeer"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2168.95
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1386
        }
      ]
    },
    {
      "rowId": "675c0c3e29eb68d9293e52eb",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cowtown"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1060.91
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 411
        }
      ]
    },
    {
      "rowId": "675c0c3e60bad5cda5ae1364",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digigene"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2613.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 494
        }
      ]
    },
    {
      "rowId": "675c0c3e71a2e5302e914dc7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Hopeli"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1035.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 902
        }
      ]
    },
    {
      "rowId": "675c0c3e8a8f6d2f99df12e4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Vicon"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2532.85
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 757
        }
      ]
    },
    {
      "rowId": "675c0c3ebffc1630d65809c4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Corecom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2036.42
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 332
        }
      ]
    },
    {
      "rowId": "675c0c3e0662e3ed5c7514b2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Avenetro"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2683.25
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 459
        }
      ]
    },
    {
      "rowId": "675c0c3e0dc70dc02e5c864a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quailcom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2874.33
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1458
        }
      ]
    },
    {
      "rowId": "675c0c3ebe87de378fdb514b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zolavo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2833.06
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 316
        }
      ]
    },
    {
      "rowId": "675c0c3e777fb1ba5148d64f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Waretel"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2250.47
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1341
        }
      ]
    },
    {
      "rowId": "675c0c3e2ce422fda3a16864",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Typhonica"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 715.5
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1363
        }
      ]
    },
    {
      "rowId": "675c0c3e484efbaaa476b638",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Makingway"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1526.84
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 222
        }
      ]
    },
    {
      "rowId": "675c0c3e3459206eb12dd867",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cubicide"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 282.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 567
        }
      ]
    },
    {
      "rowId": "675c0c3eb1bfc3a17a947451",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Stockpost"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1195.59
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1011
        }
      ]
    },
    {
      "rowId": "675c0c3ee558cea959df8b01",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Spacewax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2910.45
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 75
        }
      ]
    },
    {
      "rowId": "675c0c3e511c028beb04e1f2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Hawkster"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2580.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1268
        }
      ]
    },
    {
      "rowId": "675c0c3eda45fad4e1346986",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Extrawear"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1669.3
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1152
        }
      ]
    },
    {
      "rowId": "675c0c3e61231668d1d9c19c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Remotion"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 831.7
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1347
        }
      ]
    },
    {
      "rowId": "675c0c3e432beb37f2298b1f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exovent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1515.57
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 167
        }
      ]
    },
    {
      "rowId": "675c0c3e19cf8c1b795af88e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Niquent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1765.79
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 54
        }
      ]
    },
    {
      "rowId": "675c0c3e9010d4a0ba60f2d9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Veraq"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2429.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1411
        }
      ]
    },
    {
      "rowId": "675c0c3e18dccc1e21039633",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zaggles"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2668.49
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1160
        }
      ]
    },
    {
      "rowId": "675c0c3e51ef6ee76d179678",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Anocha"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1627.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 556
        }
      ]
    },
    {
      "rowId": "675c0c3ee80a8cb33fce3aa4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Otherside"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2519.55
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 975
        }
      ]
    },
    {
      "rowId": "675c0c3e58f4f6d074d5180b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Automon"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1718.21
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 779
        }
      ]
    },
    {
      "rowId": "675c0c3e9caa808dbefa10ca",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Enormo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2126.45
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 587
        }
      ]
    },
    {
      "rowId": "675c0c3ef2de5897a5318c51",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Netbook"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 845.92
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1377
        }
      ]
    },
    {
      "rowId": "675c0c3eb150673fb6d8f5e9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Concility"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1269.44
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 744
        }
      ]
    },
    {
      "rowId": "675c0c3e13ab35dfd7c7ae04",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Furnafix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2272.32
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1134
        }
      ]
    },
    {
      "rowId": "675c0c3e96c33482ca82b0fc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zenolux"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1489.49
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 74
        }
      ]
    },
    {
      "rowId": "675c0c3ea01932726a5e22f3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Toyletry"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2534.46
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 444
        }
      ]
    },
    {
      "rowId": "675c0c3e7f9183d79ac37cb1",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quonk"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1854.61
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 34
        }
      ]
    },
    {
      "rowId": "675c0c3eed994583f79f28c0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Opportech"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 616.37
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1070
        }
      ]
    },
    {
      "rowId": "675c0c3ea64299c61ebbe5b1",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Minga"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 159.81
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 740
        }
      ]
    },
    {
      "rowId": "675c0c3e36511a9f96afc008",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pyrami"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2874.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 334
        }
      ]
    },
    {
      "rowId": "675c0c3e07eedf80574e65a3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Architax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1466.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1004
        }
      ]
    },
    {
      "rowId": "675c0c3ef76432c885bdbd3f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Senmao"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1682.42
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1098
        }
      ]
    },
    {
      "rowId": "675c0c3ec427dc345e652fad",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digirang"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2118.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 417
        }
      ]
    },
    {
      "rowId": "675c0c3ed5a2c6f3616c7831",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Amril"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2713.44
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1164
        }
      ]
    },
    {
      "rowId": "675c0c3e2c9b64cd76c39d97",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zentix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1124.77
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1202
        }
      ]
    },
    {
      "rowId": "675c0c3ecb2136aec5bc8ba5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Austech"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 109.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 297
        }
      ]
    },
    {
      "rowId": "675c0c3e15f83beaa81af5db",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Darwinium"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 940.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 243
        }
      ]
    },
    {
      "rowId": "675c0c3edeab97efcc83500f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Valpreal"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 474.88
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "blue",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 278
        }
      ]
    },
    {
      "rowId": "675c0c3e0d7509dc2b4168b5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Inventure"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2256.72
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1369
        }
      ]
    },
    {
      "rowId": "675c0c3e2ec5b9ccda02d682",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Nikuda"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1306.89
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 114
        }
      ]
    },
    {
      "rowId": "675c0c3e56ddff6a842639ba",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Assistix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 147.04
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 364
        }
      ]
    },
    {
      "rowId": "675c0c3e5bb78405e027318e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Vinch"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 355.45
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 643
        }
      ]
    },
    {
      "rowId": "675c0c3e8cf7e1216c035a8d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Opticom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1535.76
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 217
        }
      ]
    },
    {
      "rowId": "675c0c3e161b766e0f5beb46",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quilch"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1314.31
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 468
        }
      ]
    },
    {
      "rowId": "675c0c3ec4278b37fe72315b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zinca"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1936.8
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 963
        }
      ]
    },
    {
      "rowId": "675c0c3e90b7d5a582637e6f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Magnafone"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1380.83
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1452
        }
      ]
    },
    {
      "rowId": "675c0c3e7e223374dc1acc71",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Viagreat"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2574.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 965
        }
      ]
    },
    {
      "rowId": "675c0c3e272472c11da333c0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Imperium"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2261.96
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1471
        }
      ]
    },
    {
      "rowId": "675c0c3eeb21d7c07e25df17",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Solgan"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2118.31
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 31
        }
      ]
    },
    {
      "rowId": "675c0c3e813378432d290c5d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exiand"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 108.85
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 364
        }
      ]
    },
    {
      "rowId": "675c0c3e53eb8552989821d3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exospeed"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1052.62
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1070
        }
      ]
    },
    {
      "rowId": "675c0c3eefbb552b4281ee51",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Utarian"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1779.96
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 19
        }
      ]
    },
    {
      "rowId": "675c0c3eaa2ab2be175287b8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Anixang"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 630.52
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1427
        }
      ]
    },
    {
      "rowId": "675c0c3ec4702e0846c340cc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Furnitech"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 766.07
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 207
        }
      ]
    },
    {
      "rowId": "675c0c3ef47973c18e6cf004",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Fuelton"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 163.41
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 780
        }
      ]
    },
    {
      "rowId": "675c0c3ecbad15a8abdda79c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Aclima"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 367.03
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 50
        }
      ]
    },
    {
      "rowId": "675c0c3e4b97307fda8063ad",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Brainquil"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2755.32
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 991
        }
      ]
    },
    {
      "rowId": "675c0c3ec5b8aaac0edca229",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Fitcore"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 557.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 224
        }
      ]
    },
    {
      "rowId": "675c0c3e2ee995968cb24322",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tropolis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2738.77
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1380
        }
      ]
    },
    {
      "rowId": "675c0c3e0b3e23e5ecf0aaab",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Geostele"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2505.38
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 978
        }
      ]
    },
    {
      "rowId": "675c0c3eb6de05cb57d833e0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Signity"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1894.05
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 343
        }
      ]
    },
    {
      "rowId": "675c0c3ea83dcf41ec30e54d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sustenza"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1131.22
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 943
        }
      ]
    },
    {
      "rowId": "675c0c3e0d1979c605984d81",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ultrimax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2592.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 802
        }
      ]
    },
    {
      "rowId": "675c0c3e9a2f3071fe001a91",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exozent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 140.49
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 582
        }
      ]
    },
    {
      "rowId": "675c0c3e782602903daa6adb",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Besto"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2983.44
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 180
        }
      ]
    },
    {
      "rowId": "675c0c3ed6b8bf3bd505fd7c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Virxo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 33.27
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 229
        }
      ]
    },
    {
      "rowId": "675c0c3e654dd56ee3b94b57",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Valreda"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2066.95
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 760
        }
      ]
    },
    {
      "rowId": "675c0c3e4bfc3f99a2ffc8c6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Orbin"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 203.88
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 582
        }
      ]
    },
    {
      "rowId": "675c0c3eafc417d96802d5ea",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Mobildata"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1471.31
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1059
        }
      ]
    },
    {
      "rowId": "675c0c3ee501bc52d1767c18",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Isosphere"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1202
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 964
        }
      ]
    },
    {
      "rowId": "675c0c3e50f2e6d669a2fedc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Halap"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 326.38
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1090
        }
      ]
    },
    {
      "rowId": "675c0c3ef5574f3646d3b5f7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Geekmosis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2175.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1080
        }
      ]
    },
    {
      "rowId": "675c0c3e82808c70a8b712f7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Maximind"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1073.49
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 729
        }
      ]
    },
    {
      "rowId": "675c0c3e0539e75fa3bc5104",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Medmex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2659.29
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 785
        }
      ]
    },
    {
      "rowId": "675c0c3ea82d07cb6952ff31",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exposa"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 936.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 194
        }
      ]
    },
    {
      "rowId": "675c0c3ec429cdbbe540d8db",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Buzzness"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 143.68
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 997
        }
      ]
    },
    {
      "rowId": "675c0c3ea4b7b1b4a85d51b9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Canopoly"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1471.49
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 172
        }
      ]
    },
    {
      "rowId": "675c0c3e5e9a669d630be0e7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bytrex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1988.29
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 979
        }
      ]
    },
    {
      "rowId": "675c0c3e45daa4b13bce1540",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cincyr"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 849.58
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 49
        }
      ]
    },
    {
      "rowId": "675c0c3e894c2ded98756d1c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Eyeris"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 487.26
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 982
        }
      ]
    },
    {
      "rowId": "675c0c3ed43e4be3c152b2b4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Earthpure"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1502.68
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 191
        }
      ]
    },
    {
      "rowId": "675c0c3ebe7d3cd40641fcb4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zillar"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2481.57
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 258
        }
      ]
    },
    {
      "rowId": "675c0c3e68a8eca79dd95aba",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kog"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1157.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 605
        }
      ]
    },
    {
      "rowId": "675c0c3e6fa15b7a8bad4c65",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Unq"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 870.15
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 455
        }
      ]
    },
    {
      "rowId": "675c0c3ec20ac2a9e232d8d0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Parleynet"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2299.83
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1060
        }
      ]
    },
    {
      "rowId": "675c0c3e57b4708f03c5f9ad",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zentury"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1840.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 37
        }
      ]
    },
    {
      "rowId": "675c0c3e46976b64ec483837",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Keengen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2850.4
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1189
        }
      ]
    },
    {
      "rowId": "675c0c3e6557a68313e7dd80",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Centice"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 737.78
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 686
        }
      ]
    },
    {
      "rowId": "675c0c3ec7fc25e643f2e724",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cuizine"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 980.79
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1105
        }
      ]
    },
    {
      "rowId": "675c0c3e312a045e1bbbf77c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zounds"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 340.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 58
        }
      ]
    },
    {
      "rowId": "675c0c3e1d4acf37b23f9337",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Xylar"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2668.57
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1297
        }
      ]
    },
    {
      "rowId": "675c0c3e5807d607cebc231e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Slambda"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1375.83
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 338
        }
      ]
    },
    {
      "rowId": "675c0c3ed95e5ac47755d49b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Infotrips"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2236.37
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 463
        }
      ]
    },
    {
      "rowId": "675c0c3ec8d22c0e035b9a4e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Corepan"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1120.53
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 969
        }
      ]
    },
    {
      "rowId": "675c0c3e68dae4e861a84419",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Deminimum"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 790.13
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1405
        }
      ]
    },
    {
      "rowId": "675c0c3edc2b02dcb2538e27",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pyramax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1859.65
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 699
        }
      ]
    },
    {
      "rowId": "675c0c3e61326cd4e263c15f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Uni"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2934.03
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 354
        }
      ]
    },
    {
      "rowId": "675c0c3edb2db6b5a7fe5878",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Nspire"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1671.63
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1250
        }
      ]
    },
    {
      "rowId": "675c0c3e48561bc75c0b6d54",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Uniworld"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 820.81
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 306
        }
      ]
    },
    {
      "rowId": "675c0c3e45e0ea758088fcd2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Vidto"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2440.19
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 7
        }
      ]
    },
    {
      "rowId": "675c0c3e0bd5bea964cb112a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Talae"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2663
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 827
        }
      ]
    },
    {
      "rowId": "675c0c3ec0637cbdf2e3ddbd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Terragen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1989.49
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1182
        }
      ]
    },
    {
      "rowId": "675c0c3e98a7f1f3ef1ec0f8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Buzzmaker"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2655.46
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 487
        }
      ]
    },
    {
      "rowId": "675c0c3e11a1211086051484",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Printspan"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 77.38
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 306
        }
      ]
    },
    {
      "rowId": "675c0c3e953e724e38f55c80",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Greeker"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1554.93
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1367
        }
      ]
    },
    {
      "rowId": "675c0c3e19cac1d7c533ecfc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Blurrybus"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1173.44
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 235
        }
      ]
    },
    {
      "rowId": "675c0c3e54b22627ab8f887d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cubix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2198.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 576
        }
      ]
    },
    {
      "rowId": "675c0c3e63c45199a2b85790",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kiggle"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1686.2
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 446
        }
      ]
    },
    {
      "rowId": "675c0c3e01047109f830de8d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sultraxin"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 634.37
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1168
        }
      ]
    },
    {
      "rowId": "675c0c3e7f1375d5e8eac05c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Helixo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2540.98
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 564
        }
      ]
    },
    {
      "rowId": "675c0c3e1f07960256c551e6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Panzent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2689.61
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 853
        }
      ]
    },
    {
      "rowId": "675c0c3ed0247911508b31fa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Housedown"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2502.39
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 227
        }
      ]
    },
    {
      "rowId": "675c0c3ed79710db6bbaec1e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quarmony"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1666.21
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 115
        }
      ]
    },
    {
      "rowId": "675c0c3e2bcba40a11510283",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digifad"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2297.43
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1153
        }
      ]
    },
    {
      "rowId": "675c0c3ee0fb6d8ea158570c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Circum"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2343.85
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1437
        }
      ]
    },
    {
      "rowId": "675c0c3ee49ca0f727c095cd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Dognost"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 667.27
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 766
        }
      ]
    },
    {
      "rowId": "675c0c3ea296a101a8827e92",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Powernet"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1555.43
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 590
        }
      ]
    },
    {
      "rowId": "675c0c3e2ec3d78ac97e3e52",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zidant"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1244.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 67
        }
      ]
    },
    {
      "rowId": "675c0c3e4b797ec6009a01fe",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Poshome"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 133.02
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 777
        }
      ]
    },
    {
      "rowId": "675c0c3e475ed13b0e752f39",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Centregy"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 402.43
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1134
        }
      ]
    },
    {
      "rowId": "675c0c3e916cb54b9d0f5dd9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Extragene"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 212.33
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1120
        }
      ]
    },
    {
      "rowId": "675c0c3efdbe8c5939ffeffa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Softmicro"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 413.69
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1359
        }
      ]
    },
    {
      "rowId": "675c0c3e791f04ac02c305ea",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Euron"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1368.33
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1008
        }
      ]
    },
    {
      "rowId": "675c0c3e01af4405005423af",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kyagoro"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1058.63
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 462
        }
      ]
    },
    {
      "rowId": "675c0c3e26b20a424faf7bac",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tellifly"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 436.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 242
        }
      ]
    },
    {
      "rowId": "675c0c3eaec7f33715485f28",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Biohab"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1969.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 468
        }
      ]
    },
    {
      "rowId": "675c0c3ee3eb98bc7a681f28",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Octocore"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1653.41
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 30
        }
      ]
    },
    {
      "rowId": "675c0c3e15541c09e0020ea9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zerbina"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2879.78
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 416
        }
      ]
    },
    {
      "rowId": "675c0c3eef039e07f08b6e64",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Menbrain"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2568.47
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 1071
        }
      ]
    },
    {
      "rowId": "675c0c3ed2061bce511f2c8b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Xelegyl"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1968.19
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "green",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 634
        }
      ]
    },
    {
      "rowId": "675c0c3ee23731351d302f67",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Overplex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 838.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 287
        }
      ]
    },
    {
      "rowId": "675c0c3e2fbbfa037790cbab",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Premiant"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2721.89
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 258
        }
      ]
    },
    {
      "rowId": "675c0c3ef83ec023dd42493f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Xurban"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2932.85
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "availability",
          "value": 193
        }
      ]
    }
  ]
}