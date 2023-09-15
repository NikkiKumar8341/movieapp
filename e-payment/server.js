//sk_test_51N4fZ2SEWY5cUsl878UnZZbkjHUSiDlYukk5h0hBNZILGOHe34lPhpxsdFYftz3ucInsgIbW8J8m9OfCGiCxoHue00Y3QWJh5T
//coffee cup:price_1N4fiISEWY5cUsl8SJ23VcP2
//sunglasses:price_1N5juPSEWY5cUsl8C7lvGzfs



const express=require('express');
var cors=require('cors');
const stripe=require('stripe')('sk_test_51N4fZ2SEWY5cUsl878UnZZbkjHUSiDlYukk5h0hBNZILGOHe34lPhpxsdFYftz3ucInsgIbW8J8m9OfCGiCxoHue00Y3QWJh5T');


const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));