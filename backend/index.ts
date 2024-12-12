import express from "express";
// import { v4 as uuidv4 } from 'uuid';
import cors from "cors";

const app = express();
const url = process.env.VITE_SERVER_PORT || 3000;

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

  if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
    // res.status(400).send({ error: 'Invalid parameters' });
    return;
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = tableData.data.slice(startIndex, endIndex);

  res.json({
    headers: tableData.headers,
    data,
    hasMore: endIndex < tableData.data.length,
  });
});

// Seeded startdata
// notes # { id: string, title: string, content: string, catalog: string, tags: string[], createdAt: string, updatedAt: string }
const tableData = {
  "headers": [
    { id: 'product', cellType: 'text', title: "Product" },
    { id: 'price', cellType: 'currency', title: "Price" },
    { id: 'category', cellType: 'category', title: "Category" },
    { id: 'stock', cellType: 'integer', title: "Stock" }
  ],
  "data": [
    {
      "rowId": "6759ff974ef517da360b8314",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sultraxin"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 948.21
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
          "cellType": "integer",
          "value": 556
        }
      ]
    },
    {
      "rowId": "6759ff97fe7c160645823b8a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digifad"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2850.09
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1091
        }
      ]
    },
    {
      "rowId": "6759ff975b9de58f2602215b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Comcur"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 695.45
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
          "cellType": "integer",
          "value": 685
        }
      ]
    },
    {
      "rowId": "6759ff97bfee99f87ffaba48",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Memora"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2448.65
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1050
        }
      ]
    },
    {
      "rowId": "6759ff97b1bca1c5333ca819",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Nebulean"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1936.98
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 41
        }
      ]
    },
    {
      "rowId": "6759ff97b80dea1e03c7a251",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tubalum"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2771.58
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 563
        }
      ]
    },
    {
      "rowId": "6759ff976205122c851e5a90",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Darwinium"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2376.1
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1392
        }
      ]
    },
    {
      "rowId": "6759ff97f0bf1085088ad8ce",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quonata"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1713.5
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
          "cellType": "integer",
          "value": 442
        }
      ]
    },
    {
      "rowId": "6759ff9733c93c908e4b61df",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Imant"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 222.16
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1309
        }
      ]
    },
    {
      "rowId": "6759ff97c196751d1d7ea91f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Elentrix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2519.24
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
          "cellType": "integer",
          "value": 309
        }
      ]
    },
    {
      "rowId": "6759ff97cd75630b56ba2d03",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Gadtron"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 823.29
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1099
        }
      ]
    },
    {
      "rowId": "6759ff97c7203ab0d519a3e0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Billmed"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2942.91
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1181
        }
      ]
    },
    {
      "rowId": "6759ff97abd9eb2002e483d6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Centree"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1312.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 191
        }
      ]
    },
    {
      "rowId": "6759ff9727eb398ca08fdb45",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quizmo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2861.15
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
          "cellType": "integer",
          "value": 1364
        }
      ]
    },
    {
      "rowId": "6759ff973ccafce75b10d8e1",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Deminimum"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 357.57
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 541
        }
      ]
    },
    {
      "rowId": "6759ff973b178e481013023e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Waretel"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 707.28
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
          "cellType": "integer",
          "value": 890
        }
      ]
    },
    {
      "rowId": "6759ff97af1ac2e7763edd15",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Snowpoke"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 735.16
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
          "cellType": "integer",
          "value": 1232
        }
      ]
    },
    {
      "rowId": "6759ff97436b862141011a68",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cubix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2733.94
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 648
        }
      ]
    },
    {
      "rowId": "6759ff97768630bcd06791a3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Printspan"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1538.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 132
        }
      ]
    },
    {
      "rowId": "6759ff9796b36edb46c813bf",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Avenetro"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2555.19
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1112
        }
      ]
    },
    {
      "rowId": "6759ff97f19c85c132bb8bb4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bedder"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1868.78
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "red",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 9
        }
      ]
    },
    {
      "rowId": "6759ff97f3fc56ebc4206d04",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Isotrack"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1459.65
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 868
        }
      ]
    },
    {
      "rowId": "6759ff9763bf492a3fc4537e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Rockabye"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2457.22
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
          "cellType": "integer",
          "value": 171
        }
      ]
    },
    {
      "rowId": "6759ff97e0c84a5287dde72f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Crustatia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1322.22
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 678
        }
      ]
    },
    {
      "rowId": "6759ff97a5fbedfd3c276a89",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Idealis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2957.49
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
          "cellType": "integer",
          "value": 91
        }
      ]
    },
    {
      "rowId": "6759ff970ed929e7bca969d2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Artiq"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 974.74
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
          "cellType": "integer",
          "value": 578
        }
      ]
    },
    {
      "rowId": "6759ff97243fca3a67917c4e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Keengen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2614.29
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
          "cellType": "integer",
          "value": 191
        }
      ]
    },
    {
      "rowId": "6759ff976eeae3bd580ab975",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Qnekt"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 784.68
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
          "cellType": "integer",
          "value": 838
        }
      ]
    },
    {
      "rowId": "6759ff976763368dd3cbdfc8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kage"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2326.39
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1042
        }
      ]
    },
    {
      "rowId": "6759ff975fb146e020a85682",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Urbanshee"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1984.71
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 473
        }
      ]
    },
    {
      "rowId": "6759ff9797b459cb649fc54d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Realmo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1818.27
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 661
        }
      ]
    },
    {
      "rowId": "6759ff970d75300f33f9bb76",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Confrenzy"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 545.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 598
        }
      ]
    },
    {
      "rowId": "6759ff97c60ffddcde97febc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Norsul"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 181.78
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 38
        }
      ]
    },
    {
      "rowId": "6759ff97c18293301dfc3c07",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Overfork"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2260.9
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
          "cellType": "integer",
          "value": 1436
        }
      ]
    },
    {
      "rowId": "6759ff97fbd285a4fc4b47f9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Supremia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 620.16
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 50
        }
      ]
    },
    {
      "rowId": "6759ff97080074d9270efb31",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Toyletry"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2816.37
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1401
        }
      ]
    },
    {
      "rowId": "6759ff97c7b7046bd42d764c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tsunamia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1549.73
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
          "cellType": "integer",
          "value": 51
        }
      ]
    },
    {
      "rowId": "6759ff97e9b7966848d15b30",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Asimiline"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 637.28
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1424
        }
      ]
    },
    {
      "rowId": "6759ff97214359c3923a0d80",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Andershun"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1474.22
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
          "cellType": "integer",
          "value": 665
        }
      ]
    },
    {
      "rowId": "6759ff97c35b169ef58245e7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zilidium"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 853.58
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "red",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 294
        }
      ]
    },
    {
      "rowId": "6759ff9768d61b85ba34c3e2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Talendula"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1111.38
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
          "cellType": "integer",
          "value": 738
        }
      ]
    },
    {
      "rowId": "6759ff977145c577caa61e54",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Senmao"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1037.82
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 550
        }
      ]
    },
    {
      "rowId": "6759ff977273e9ad82ef19ed",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Velity"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1234.4
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
          "cellType": "integer",
          "value": 769
        }
      ]
    },
    {
      "rowId": "6759ff97d9754c787a4f84a0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zerbina"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2553.6
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
          "cellType": "integer",
          "value": 1099
        }
      ]
    },
    {
      "rowId": "6759ff971cd8be2936d0f2e2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Omnigog"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1262.22
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
          "cellType": "integer",
          "value": 695
        }
      ]
    },
    {
      "rowId": "6759ff9779fe71fe7a8aaabf",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Extragen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2927.08
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
          "cellType": "integer",
          "value": 881
        }
      ]
    },
    {
      "rowId": "6759ff975d17a0b2ce1980e6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Songlines"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2566.12
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
          "cellType": "integer",
          "value": 487
        }
      ]
    },
    {
      "rowId": "6759ff97b8cb524bd205e120",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Techade"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2860.73
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
          "cellType": "integer",
          "value": 151
        }
      ]
    },
    {
      "rowId": "6759ff973f9db73adebc41fa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pearlessa"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 438.15
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
          "cellType": "integer",
          "value": 400
        }
      ]
    },
    {
      "rowId": "6759ff975d14e9dd4f555619",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Intrawear"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1593.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "blue",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 109
        }
      ]
    },
    {
      "rowId": "6759ff97de2aabc1fce47b7a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Affluex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 253.12
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 122
        }
      ]
    },
    {
      "rowId": "6759ff970832b93c71e69ea1",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ontality"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2036.4
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 860
        }
      ]
    },
    {
      "rowId": "6759ff976970c962ca375ddd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Enquility"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2271.67
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 454
        }
      ]
    },
    {
      "rowId": "6759ff972c1e1a1be0aa0106",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Accupharm"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1029.81
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
          "cellType": "integer",
          "value": 1087
        }
      ]
    },
    {
      "rowId": "6759ff979070cfef951911c0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bittor"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2701.35
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 206
        }
      ]
    },
    {
      "rowId": "6759ff97267f4513eb533a05",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Deepends"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 445.86
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
          "cellType": "integer",
          "value": 175
        }
      ]
    },
    {
      "rowId": "6759ff9793927c81709c5002",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Cytrex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 600.79
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1099
        }
      ]
    },
    {
      "rowId": "6759ff97c88c903f6c0bf39a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Voratak"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1274.89
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "blue",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 928
        }
      ]
    },
    {
      "rowId": "6759ff9755030d01c45b8f9e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Dognost"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2783.42
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1397
        }
      ]
    },
    {
      "rowId": "6759ff9731b749a90b8ed9c4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Musix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 942.26
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1166
        }
      ]
    },
    {
      "rowId": "6759ff976215292b1808c0c0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Enaut"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 433.74
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 144
        }
      ]
    },
    {
      "rowId": "6759ff9713b85b6e29b82362",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Comcubine"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1388.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 840
        }
      ]
    },
    {
      "rowId": "6759ff97c6dc3e9f6fb07f48",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Eplode"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1520.03
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1087
        }
      ]
    },
    {
      "rowId": "6759ff97bd88ec56dded3139",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Apexia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 773.01
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
          "cellType": "integer",
          "value": 102
        }
      ]
    },
    {
      "rowId": "6759ff971a5437cb4ce9bcf3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Marvane"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1999.03
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "blue",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 712
        }
      ]
    },
    {
      "rowId": "6759ff970046c27f22221c2c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Wrapture"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2233.81
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1285
        }
      ]
    },
    {
      "rowId": "6759ff979214d91bf7698ada",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Terrago"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 585.44
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 930
        }
      ]
    },
    {
      "rowId": "6759ff97dd5465184ffd64bc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Navir"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2226.55
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
          "cellType": "integer",
          "value": 1339
        }
      ]
    },
    {
      "rowId": "6759ff9769c72559bccecde9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exozent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2047.83
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
          "cellType": "integer",
          "value": 290
        }
      ]
    },
    {
      "rowId": "6759ff97a41d17ffcdc14f97",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Wazzu"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1665.54
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 692
        }
      ]
    },
    {
      "rowId": "6759ff97bac695dd8830a8d2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Fortean"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2554.25
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1008
        }
      ]
    },
    {
      "rowId": "6759ff97592cdb754a9a83b7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Geofarm"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 308.86
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1024
        }
      ]
    },
    {
      "rowId": "6759ff979a1bba0260df45d6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Lunchpod"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 250.44
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
          "cellType": "integer",
          "value": 936
        }
      ]
    },
    {
      "rowId": "6759ff9706419c9f8da6ac80",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Verbus"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1733.64
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
          "cellType": "integer",
          "value": 597
        }
      ]
    },
    {
      "rowId": "6759ff97696e0daf0be000ab",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Nitracyr"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1543.16
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 781
        }
      ]
    },
    {
      "rowId": "6759ff976d3ede7fc5ddb735",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Visalia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 880.64
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
          "cellType": "integer",
          "value": 1112
        }
      ]
    },
    {
      "rowId": "6759ff971dd4d6829dbd0c1b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Otherside"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1671.74
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
          "cellType": "integer",
          "value": 1072
        }
      ]
    },
    {
      "rowId": "6759ff9768970e01ed261caf",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zappix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2754.8
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
          "cellType": "integer",
          "value": 806
        }
      ]
    },
    {
      "rowId": "6759ff9724160711d8877cf1",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pyrami"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 237.38
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "red",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 199
        }
      ]
    },
    {
      "rowId": "6759ff97df40cd1d8da55be5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digial"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1262.71
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1323
        }
      ]
    },
    {
      "rowId": "6759ff9732204871c106aafd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sloganaut"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 32.46
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 606
        }
      ]
    },
    {
      "rowId": "6759ff979ce674bf4f57f8c3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Interloo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2654.83
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
          "cellType": "integer",
          "value": 1081
        }
      ]
    },
    {
      "rowId": "6759ff97cf6847039fb91e95",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Goko"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1121.97
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1422
        }
      ]
    },
    {
      "rowId": "6759ff97fc8db7cf384db8c3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Synkgen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 837.91
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1292
        }
      ]
    },
    {
      "rowId": "6759ff97805ef461c36f25ab",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Slax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2990.05
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
          "cellType": "integer",
          "value": 1138
        }
      ]
    },
    {
      "rowId": "6759ff97e1b0a07de2aa0a58",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Opticon"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2842.56
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1094
        }
      ]
    },
    {
      "rowId": "6759ff97882e6d474ed92c81",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tetratrex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1011.63
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
          "cellType": "integer",
          "value": 967
        }
      ]
    },
    {
      "rowId": "6759ff974464ec2153431d8f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Junipoor"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2773.4
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1370
        }
      ]
    },
    {
      "rowId": "6759ff97a65b75eb8bbe1bfc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Deviltoe"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 746.75
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 816
        }
      ]
    },
    {
      "rowId": "6759ff975b0de5d207460118",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Prosely"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 688.26
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 100
        }
      ]
    },
    {
      "rowId": "6759ff97c1ecc7eb61ecff6d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Isologics"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 349.67
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "yellow",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 877
        }
      ]
    },
    {
      "rowId": "6759ff97fff926714c44df63",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ecraze"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1684.8
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 253
        }
      ]
    },
    {
      "rowId": "6759ff971ae23a6e39e5be74",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Singavera"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 268.84
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 243
        }
      ]
    },
    {
      "rowId": "6759ff97397c11fffd876e03",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zillatide"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 689.01
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
          "cellType": "integer",
          "value": 741
        }
      ]
    },
    {
      "rowId": "6759ff97a7406905b93f55ca",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Grok"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 69.4
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
          "cellType": "integer",
          "value": 1439
        }
      ]
    },
    {
      "rowId": "6759ff97cd269e8777594b5f",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Filodyne"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2326.17
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
          "cellType": "integer",
          "value": 978
        }
      ]
    },
    {
      "rowId": "6759ff970f2432ffacad4e71",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tribalog"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2493.68
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "orange",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 611
        }
      ]
    },
    {
      "rowId": "6759ff97be0a496cd72cc772",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Andryx"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2189.03
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
          "cellType": "integer",
          "value": 472
        }
      ]
    },
    {
      "rowId": "6759ff9704a29e8488f9dd01",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Rodeocean"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2697.87
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 344
        }
      ]
    },
    {
      "rowId": "6759ff976bd39bbad0d041fa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Kidstock"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2925.72
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 622
        }
      ]
    },
    {
      "rowId": "6759ff9749be3338069ba7fa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Remotion"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2469.48
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
          "cellType": "integer",
          "value": 217
        }
      ]
    },
    {
      "rowId": "6759ff97015b3ccbb8e3c215",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Plexia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 840.07
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 836
        }
      ]
    },
    {
      "rowId": "6759ff978869e2ca5d918b84",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bitrex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1572.58
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
          "cellType": "integer",
          "value": 237
        }
      ]
    },
    {
      "rowId": "6759ff970dd55801ba24fab4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Hawkster"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 622.04
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
          "cellType": "integer",
          "value": 522
        }
      ]
    },
    {
      "rowId": "6759ff97febf61dc3ca49491",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Combogen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2836.99
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 590
        }
      ]
    },
    {
      "rowId": "6759ff97a8904caa90612916",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Homelux"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 216.47
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 673
        }
      ]
    },
    {
      "rowId": "6759ff978533b891d643b0d5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Strozen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2339.81
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
          "cellType": "integer",
          "value": 632
        }
      ]
    },
    {
      "rowId": "6759ff97eb43ea45ffe08af1",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Apex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2728.38
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
          "cellType": "integer",
          "value": 293
        }
      ]
    },
    {
      "rowId": "6759ff97236e05f87f5210ac",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sensate"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 457.34
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
          "cellType": "integer",
          "value": 1084
        }
      ]
    },
    {
      "rowId": "6759ff978bd24bef5fd3a4ba",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pyramis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2759.95
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
          "cellType": "integer",
          "value": 479
        }
      ]
    },
    {
      "rowId": "6759ff975148d0f0d772ff99",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Neptide"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 232
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
          "cellType": "integer",
          "value": 455
        }
      ]
    },
    {
      "rowId": "6759ff97e3e565d7bcbf268a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zaya"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2522.97
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
          "cellType": "integer",
          "value": 1364
        }
      ]
    },
    {
      "rowId": "6759ff976f7a43bfa5160a68",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Jetsilk"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1208.17
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
          "cellType": "integer",
          "value": 154
        }
      ]
    },
    {
      "rowId": "6759ff9763817494e9591dd4",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bleeko"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 760.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 251
        }
      ]
    },
    {
      "rowId": "6759ff97c10cecdd3b766323",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Opticall"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 268.83
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 345
        }
      ]
    },
    {
      "rowId": "6759ff971beedf7fd0f27dbf",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Nexgene"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 672.44
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
          "cellType": "integer",
          "value": 577
        }
      ]
    },
    {
      "rowId": "6759ff97fc0143b808b9cadb",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zogak"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2095.95
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
          "cellType": "integer",
          "value": 1152
        }
      ]
    },
    {
      "rowId": "6759ff97e0cf8f4dcf53663d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zilphur"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2726.13
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
          "cellType": "integer",
          "value": 1453
        }
      ]
    },
    {
      "rowId": "6759ff97f2a7c095b568e024",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Opticom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1209.03
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
          "cellType": "integer",
          "value": 1140
        }
      ]
    },
    {
      "rowId": "6759ff97ff25a4ea7ad19a9d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Neurocell"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2278.69
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "red",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1109
        }
      ]
    },
    {
      "rowId": "6759ff976dab502a7d2d52c5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Eclipsent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1842.27
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
          "cellType": "integer",
          "value": 1163
        }
      ]
    },
    {
      "rowId": "6759ff9760b226fb644cc871",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Retrotex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1235.87
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
          "cellType": "integer",
          "value": 562
        }
      ]
    },
    {
      "rowId": "6759ff97e2730f75a1ced03e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Interfind"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1047.26
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
          "cellType": "integer",
          "value": 1440
        }
      ]
    },
    {
      "rowId": "6759ff97435a7eed1312c4c2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Parcoe"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2257.13
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 936
        }
      ]
    },
    {
      "rowId": "6759ff970dac67f60c0128b6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ovation"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2465.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 95
        }
      ]
    },
    {
      "rowId": "6759ff977fd183c5718f72c8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Avit"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2672.36
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
          "cellType": "integer",
          "value": 1039
        }
      ]
    },
    {
      "rowId": "6759ff97a70c51f474d00a33",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Comtrail"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1268.56
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
          "cellType": "integer",
          "value": 1402
        }
      ]
    },
    {
      "rowId": "6759ff977cf16ada0ad09593",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Utara"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1034.2
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "green",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 281
        }
      ]
    },
    {
      "rowId": "6759ff972ed3f62b9da6b640",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zolarity"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1107.71
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 894
        }
      ]
    },
    {
      "rowId": "6759ff971338a47225c43611",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Turnling"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2490.96
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 12
        }
      ]
    },
    {
      "rowId": "6759ff97eb4fd18337b42f49",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Automon"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 66.8
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 483
        }
      ]
    },
    {
      "rowId": "6759ff9728066045e2ca182a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Genekom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1110.18
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
          "cellType": "integer",
          "value": 621
        }
      ]
    },
    {
      "rowId": "6759ff97c8091462648bd0ad",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Illumity"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1628.18
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "orange",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 70
        }
      ]
    },
    {
      "rowId": "6759ff9751040ad453c08127",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zosis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1729.77
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
          "cellType": "integer",
          "value": 269
        }
      ]
    },
    {
      "rowId": "6759ff974999b0baa1af6480",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digiprint"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1235.03
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
          "cellType": "integer",
          "value": 447
        }
      ]
    },
    {
      "rowId": "6759ff97bfdd94edcecb998b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Mixers"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1064.91
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
          "cellType": "integer",
          "value": 1027
        }
      ]
    },
    {
      "rowId": "6759ff973ffb4bae99f5faa6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Fanfare"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2484.43
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 700
        }
      ]
    },
    {
      "rowId": "6759ff9733a1c7b78dd5fc52",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quinex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1724.81
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
          "cellType": "integer",
          "value": 500
        }
      ]
    },
    {
      "rowId": "6759ff978506210a3b9b5f77",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Olucore"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2698.67
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
          "cellType": "integer",
          "value": 0
        }
      ]
    },
    {
      "rowId": "6759ff978a34e47255711493",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Flumbo"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2282.81
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
          "cellType": "integer",
          "value": 378
        }
      ]
    },
    {
      "rowId": "6759ff972b7f68592819235d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Xth"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1089.78
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
          "cellType": "integer",
          "value": 1056
        }
      ]
    },
    {
      "rowId": "6759ff97d6cfd88bf5180493",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Lovepad"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2673.29
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "red",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 374
        }
      ]
    },
    {
      "rowId": "6759ff975c63c5609fa70086",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bicol"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1792.67
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 39
        }
      ]
    },
    {
      "rowId": "6759ff97f026b9f6a2270cf6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Twiggery"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2703.93
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
          "cellType": "integer",
          "value": 67
        }
      ]
    },
    {
      "rowId": "6759ff97afb75ac9a8e747dc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Rameon"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2734.73
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1285
        }
      ]
    },
    {
      "rowId": "6759ff9721576c704ae4f468",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exodoc"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 774.2
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
          "cellType": "integer",
          "value": 728
        }
      ]
    },
    {
      "rowId": "6759ff97d6d2d2b750030204",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Newcube"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2017.03
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
          "cellType": "integer",
          "value": 175
        }
      ]
    },
    {
      "rowId": "6759ff977f8141420a52336e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Mantrix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2683.68
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "yellow",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1189
        }
      ]
    },
    {
      "rowId": "6759ff970064da379618bed9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Krog"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 969.17
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
          "cellType": "integer",
          "value": 620
        }
      ]
    },
    {
      "rowId": "6759ff97be7608db3a31abcc",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zolarex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 516.68
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
          "cellType": "integer",
          "value": 1359
        }
      ]
    },
    {
      "rowId": "6759ff97bc608a9457d3eacd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Noralex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1604.21
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 347
        }
      ]
    },
    {
      "rowId": "6759ff97f291ada068683504",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Mediot"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1309.01
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
          "cellType": "integer",
          "value": 81
        }
      ]
    },
    {
      "rowId": "6759ff971a756d73ce975adb",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Emoltra"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 881.18
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
          "cellType": "integer",
          "value": 1343
        }
      ]
    },
    {
      "rowId": "6759ff97cc3598ee6fd02d4e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Fibrodyne"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2373.38
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
          "cellType": "integer",
          "value": 1411
        }
      ]
    },
    {
      "rowId": "6759ff97278dfdf15ddbe345",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Twiist"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 696.7
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1357
        }
      ]
    },
    {
      "rowId": "6759ff97dbd9c2694ffeaef2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Myopium"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 977.17
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 642
        }
      ]
    },
    {
      "rowId": "6759ff97c73303692126eb24",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Anocha"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2608.6
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "yellow",
            "yellow"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 228
        }
      ]
    },
    {
      "rowId": "6759ff971a9f3273eb87e929",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Uberlux"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1566.09
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "orange",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1436
        }
      ]
    },
    {
      "rowId": "6759ff97bec680a98b1636f9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Quizka"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1760.08
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "yellow",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 760
        }
      ]
    },
    {
      "rowId": "6759ff97dc99d2380002c2c3",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Eventix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 898.75
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
          "cellType": "integer",
          "value": 1438
        }
      ]
    },
    {
      "rowId": "6759ff97292912f7185778fa",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sarasonic"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1157.67
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1314
        }
      ]
    },
    {
      "rowId": "6759ff9787c87bef1bcfcfd0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Egypto"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 723.74
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1216
        }
      ]
    },
    {
      "rowId": "6759ff979e7256163e36c058",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Flotonic"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1273.92
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
          "cellType": "integer",
          "value": 1342
        }
      ]
    },
    {
      "rowId": "6759ff979d8570e14b13dde5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Translink"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2725.47
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 221
        }
      ]
    },
    {
      "rowId": "6759ff978387838abeabb6ed",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Emergent"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 469.15
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 117
        }
      ]
    },
    {
      "rowId": "6759ff97cc14e74f6e6339c8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Oceanica"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1001.79
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 843
        }
      ]
    },
    {
      "rowId": "6759ff973c8e947f71cd9eff",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Candecor"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2561.34
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
          "cellType": "integer",
          "value": 1447
        }
      ]
    },
    {
      "rowId": "6759ff97e19023f0f5905bb9",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zenco"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1007.73
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
          "cellType": "integer",
          "value": 747
        }
      ]
    },
    {
      "rowId": "6759ff9723dac6640b11a015",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Futurize"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 954.93
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "green",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 171
        }
      ]
    },
    {
      "rowId": "6759ff976712fd3f7c7f52a7",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Zaphire"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2068.8
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
          "cellType": "integer",
          "value": 1075
        }
      ]
    },
    {
      "rowId": "6759ff973b7dd793f8ac99f6",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Baluba"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1319.82
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1493
        }
      ]
    },
    {
      "rowId": "6759ff978d0c08fc2e525c4b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Medcom"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 210.49
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
          "cellType": "integer",
          "value": 1073
        }
      ]
    },
    {
      "rowId": "6759ff9709fc184d64dd61a8",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Inventure"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1125.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "red",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1430
        }
      ]
    },
    {
      "rowId": "6759ff97fe37c96e98ccff4d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Talae"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2616.98
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "red"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 501
        }
      ]
    },
    {
      "rowId": "6759ff972a37de40807e4925",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Exosis"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2756.13
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
          "cellType": "integer",
          "value": 1246
        }
      ]
    },
    {
      "rowId": "6759ff97e34c43525b36774b",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Ultrimax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1739.51
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1368
        }
      ]
    },
    {
      "rowId": "6759ff970274eb7a1b49917a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Collaire"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 114.07
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
          "cellType": "integer",
          "value": 1421
        }
      ]
    },
    {
      "rowId": "6759ff970b9dff1ed27b8237",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Geekfarm"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1007.13
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "green",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 906
        }
      ]
    },
    {
      "rowId": "6759ff9716b2903e2c67efea",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Pawnagra"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 293.93
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
          "cellType": "integer",
          "value": 495
        }
      ]
    },
    {
      "rowId": "6759ff97390395b591102565",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Orboid"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1144.63
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 731
        }
      ]
    },
    {
      "rowId": "6759ff976303c197168f1d75",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Tourmania"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2408.06
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 526
        }
      ]
    },
    {
      "rowId": "6759ff97fddf87a1b325a57c",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Snips"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2706.16
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "orange",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 21
        }
      ]
    },
    {
      "rowId": "6759ff97a3668e82e3ade3f5",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Sunclipse"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2489.56
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
          "cellType": "integer",
          "value": 1041
        }
      ]
    },
    {
      "rowId": "6759ff97830736584d513006",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Netplax"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1020.45
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 834
        }
      ]
    },
    {
      "rowId": "6759ff97e3c01008458a8f8e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Atgen"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1894.34
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "blue",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 957
        }
      ]
    },
    {
      "rowId": "6759ff97324f8bdffd4fd881",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bytrex"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2398.47
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
          "cellType": "integer",
          "value": 1178
        }
      ]
    },
    {
      "rowId": "6759ff9746bdef78a0f74a6e",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Harmoney"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1611.14
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "orange",
            "orange",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1484
        }
      ]
    },
    {
      "rowId": "6759ff97cced94eecc1511f2",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Plutorque"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2571.83
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "green",
            "blue",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1459
        }
      ]
    },
    {
      "rowId": "6759ff970054eb23d4194757",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Unia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1116.95
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "red",
            "red",
            "orange"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1463
        }
      ]
    },
    {
      "rowId": "6759ff97f103ad4af81fa66d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Supportal"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2601.43
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1201
        }
      ]
    },
    {
      "rowId": "6759ff9751d3db34088583ac",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Orbalix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2119.44
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "blue"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1091
        }
      ]
    },
    {
      "rowId": "6759ff97809b130b53fdc599",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Frolix"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2795.23
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 932
        }
      ]
    },
    {
      "rowId": "6759ff97b0d17de8f420638d",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Bizmatic"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2662.47
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
          "cellType": "integer",
          "value": 1010
        }
      ]
    },
    {
      "rowId": "6759ff978723759780d7d427",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Xurban"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 1224.15
        },
        {
          "id": "category",
          "cellType": "category",
          "value": [
            "blue",
            "green",
            "green"
          ]
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 781
        }
      ]
    },
    {
      "rowId": "6759ff974ecc547665a29b50",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Globoil"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 965.84
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
          "cellType": "integer",
          "value": 1077
        }
      ]
    },
    {
      "rowId": "6759ff97f56d82bdd19aacea",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Accusage"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 809.05
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 598
        }
      ]
    },
    {
      "rowId": "6759ff97e7751cdf43d57b5a",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Essensia"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 2170.7
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 808
        }
      ]
    },
    {
      "rowId": "6759ff97f70d8ea154b75db0",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Digitalus"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 326.67
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
          "cellType": "integer",
          "value": 503
        }
      ]
    },
    {
      "rowId": "6759ff97d2a82d4d9f905f88",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Electonic"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 919.55
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1297
        }
      ]
    },
    {
      "rowId": "6759ff979a0d8c4514cca5dd",
      "cells": [
        {
          "id": "product",
          "cellType": "text",
          "value": "Vetron"
        },
        {
          "id": "price",
          "cellType": "currency",
          "value": 971.56
        },
        {
          "id": "category",
          "cellType": "category",
          "value": []
        },
        {
          "id": "stock",
          "cellType": "integer",
          "value": 1214
        }
      ]
    }
  ]
}