//qui scriviamo tutto il codice cors per gli accessi
const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { request } = require("http");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
//le richieste verranno passate attraverso json
app.use(express.json());
//questo ci connetterà alla porta 4000 di express
app.use(cors());
//inizializziamo la connessione al datatbase

mongoose.connect(
  "mongodb+srv://licaneculai98:Pescatore810@cluster0.boa36vd.mongodb.net/StyleConcept"
);
//creazione delle API
app.get("/", (req, res) => {
  res.send("Express app is Running");
});

//sistema per salvare le immagini
const storage = multer.diskStorage({
  destination: "./upload/immagini",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });
// creazione dell'endpoint di upload per le immagini
app.use("/immagini", express.static("upload/immagini"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `https://style-concept-7f84.onrender.com/immagini/${req.file.filename}`,
  });
});

// schema per ogni prodotto
const ProductSchema = new mongoose.Schema({
  // Non è necessario definire esplicitamente un campo "id",
  // MongoDB assegnerà automaticamente un _id univoco per ogni documento

  name: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

app.post("/addproduct", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    material: req.body.material,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    type: req.body.type,
  });
  console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// enpoint per eliminare oggetti

app.post("/removeproduct", async (req, res) => {
  try {
    const productId = req.body.id;
    await Product.findByIdAndDelete(productId);
    console.log("removed");
    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, error: "Error removing product" });
  }
});

//creazione API per trovare tutti i prodotti
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all product fetched");
  res.send(products);
});

// Endpoint per ottenere i dettagli completi dei prodotti in base agli _id
app.get("/products", async (req, res) => {
  try {
    const productIds = req.query.ids.split(","); // Ottieni gli _id dei prodotti dalla query string

    // Cerca i prodotti nel database utilizzando gli _id forniti
    const products = await Product.find({ _id: { $in: productIds } });

    // Restituisci i dettagli completi dei prodotti trovati
    res.status(200).json(products);
  } catch (error) {
    // Se si verifica un errore durante la ricerca dei prodotti, invia una risposta con un messaggio di errore
    console.error(
      "Errore durante il recupero dei dettagli dei prodotti:",
      error
    );
    res.status(500).json({
      error:
        "Si è verificato un errore durante il recupero dei dettagli dei prodotti",
    });
  }
});
//API per creare lo chema dello user, prima il model però
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
    default: {},
  },
  likeData: {
    type: Object,
    default: {},
  },
  isAdmin: {
    type: String,
    default: false,
  },
  orderData: [
    {
      orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order", // Riferimento al modello degli ordini, se necessario
      },
      orderDate: {
        type: Date,
        default: Date.now,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      items: {
        type: Object, // Items come oggetto
        default: {}, // Oggetto vuoto di default
      },
      status: {
        type: String,
        default: "in preparazione",
      },
      deliveryAddress: {
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        cap: {
          type: String,
          required: true,
        },
        number: {
          type: String,
          required: true,
        },
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "Utente già registrato con lo stesso indirizzo email",
    });
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: {},
    likeData: {}, // Inizializza il carrello come oggetto vuoto
    isAdmin: false,
    orderData: [],
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({
    success: true,
    token,
  });
});
//endpoint per il login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "pasword errata" });
    }
  } else {
    res.json({ success: false, errors: "email errata" });
  }
});
//creazione del middleware per fare la fetch sullo user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ errors: "Please authenticate using valid token" });
  }

  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ errors: "Please authenticate using valid token" });
  }
};

app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    const itemId = req.body.itemId;
    const quantity = req.body.quantity; // Aggiunto il recupero della quantità desiderata
    const size = req.body.size;
    const userId = req.user.id;

    let userData = await Users.findOne({ _id: userId });

    // Verifica se l'oggetto dell'utente ha già un campo per l'itemId nel carrello
    if (!userData.cartData.hasOwnProperty(itemId)) {
      // Se l'oggetto dell'utente non contiene ancora l'itemId, lo aggiungi al carrello con la quantità desiderata
      userData.cartData[itemId] = { quantity: quantity, size: size };
    } else {
      // Se l'oggetto dell'utente contiene già l'itemId, aggiorna la quantità desiderata
      userData.cartData[itemId] += quantity;
    }

    // Aggiorna il documento dell'utente nel database con il carrello aggiornato
    await Users.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData }
    );

    // Invia una risposta JSON di successo
    res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    // Se si verifica un errore, invia una risposta JSON con un messaggio di errore
    console.error("Error adding item to cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding item to cart" });
  }
});

//creazione endpoint per aggiungere i prodotti alla lista dei mi piace
app.post("/addtolike", fetchUser, async (req, res) => {
  try {
    const itemId = req.body.itemId;
    const userId = req.user.id;

    let userData = await Users.findOne({ _id: userId });

    // Verifica se l'oggetto dell'utente ha già un campo per l'itemId nella lista dei mi piace
    if (!userData.likeData.hasOwnProperty(itemId)) {
      // Se l'oggetto dell'utente non contiene ancora l'itemId, lo aggiungi alla lista dei mi piace con una quantità di 1
      userData.likeData[itemId] = 1;
    } else {
      // Se l'oggetto dell'utente contiene già l'itemId, incrementa la quantità
      userData.likeData[itemId] += 1;
    }

    // Aggiorna il documento dell'utente nel database con la lista aggiornata
    await Users.findOneAndUpdate(
      { _id: userId },
      { likeData: userData.likeData }
    );

    // Invia una risposta JSON di successo
    res.status(200).json({ message: "Item added to like list successfully" });
  } catch (error) {
    // Se si verifica un errore, invia una risposta JSON con un messaggio di errore
    console.error("Error adding item to like list:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding item to like list" });
  }
});
// creazione endpoint per rimuovere i prodotti da cartdata

app.post("/removefromcart", fetchUser, async (req, res) => {
  try {
    const itemId = req.body.itemId; // Ottieni l'ID dell'elemento da rimuovere
    const userId = req.user.id; // Ottieni l'ID dell'utente

    // Trova l'utente nel database
    let userData = await Users.findOne({ _id: userId });

    // Verifica se l'oggetto dell'utente contiene l'itemId nel carrello
    if (userData.cartData.hasOwnProperty(itemId)) {
      // Se l'oggetto dell'utente contiene l'itemId, decrementa la quantità
      userData.cartData[itemId] -= 1;

      // Se la quantità dell'itemId nel carrello dell'utente è 0 o inferiore, rimuovi completamente l'elemento dal carrello
      if (userData.cartData[itemId] <= 0) {
        delete userData.cartData[itemId];
      }

      // Aggiorna il documento dell'utente nel database con il carrello aggiornato
      await Users.findOneAndUpdate(
        { _id: userId },
        { cartData: userData.cartData }
      );

      // Invia una risposta JSON di successo
      res.status(200).json({ message: "Item removed from cart successfully" });
    } else {
      // Se l'itemId non è presente nel carrello dell'utente, invia una risposta JSON con un messaggio di errore
      res.status(404).json({ error: "Item not found in cart" });
    }
  } catch (error) {
    // Se si verifica un errore, invia una risposta JSON con un messaggio di errore
    console.error("Error removing item from cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while removing item from cart" });
  }
});
//creazione endpoint per aggiungere elementi alla lista dei mi piace
app.post("/removefromlike", fetchUser, async (req, res) => {
  try {
    const itemId = req.body.itemId; // Ottieni l'ID dell'elemento da rimuovere
    const userId = req.user.id; // Ottieni l'ID dell'utente

    // Trova l'utente nel database
    let userData = await Users.findOne({ _id: userId });

    // Verifica se l'oggetto dell'utente contiene l'itemId nel carrello
    if (userData.likeData.hasOwnProperty(itemId)) {
      // Se l'oggetto dell'utente contiene l'itemId, decrementa la quantità
      userData.likeData[itemId] -= 1;

      // Se la quantità dell'itemId nel carrello dell'utente è 0 o inferiore, rimuovi completamente l'elemento dal carrello
      if (userData.likeData[itemId] <= 0) {
        delete userData.likeData[itemId];
      }

      // Aggiorna il documento dell'utente nel database con il carrello aggiornato
      await Users.findOneAndUpdate(
        { _id: userId },
        { likeData: userData.likeData }
      );

      // Invia una risposta JSON di successo
      res
        .status(200)
        .json({ message: "Item removed from like list successfully" });
    } else {
      // Se l'itemId non è presente nel carrello dell'utente, invia una risposta JSON con un messaggio di errore
      res.status(404).json({ error: "Item not found in like list" });
    }
  } catch (error) {
    // Se si verifica un errore, invia una risposta JSON con un messaggio di errore
    console.error("Error removing item from like list:", error);
    res
      .status(500)
      .json({ error: "An error occurred while removing item from like list" });
  }
});
// endpoint per prendere gli elementi dal carrello
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("get cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});
//endpoint per prendere gli oggetti dalla lista dei mi piace
app.post("/getlike", fetchUser, async (req, res) => {
  console.log("get like");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.likeData);
});
app.post("/getadmin", fetchUser, async (req, res) => {
  console.log("get admin");

  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.isAdmin);
});
// endpoint per creare gli ordini
app.post("/createorder", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id; // Ottieni l'ID dell'utente
    const userData = await Users.findById(userId); // Trova l'utente nel database

    // Verifica se l'utente ha articoli nel carrello
    if (Object.keys(userData.cartData).length === 0) {
      return res.status(400).json({ error: "Il carrello dell'utente è vuoto" });
    }

    // Verifica se è stata fornita la quantità per ciascun articolo
    if (!req.body.items || !Array.isArray(req.body.items)) {
      return res
        .status(400)
        .json({ error: "La lista degli articoli non è valida" });
    }

    // Creazione dell'oggetto ordine
    const order = {
      totalAmount: req.body.totalAmount,
      items: Object.keys(userData.cartData).map((productId) => ({
        productId: productId,
        dati: userData.cartData[productId],
      })),
      status: "in preparazione",
      deliveryAddress: req.body.deliveryAddress, // Assumi che le informazioni sull'indirizzo di consegna siano inviate nel corpo della richiesta
    };

    // Aggiungi l'ordine alla lista degli ordini dell'utente
    userData.orderData.push(order);

    // Svuota il carrello dell'utente
    userData.cartData = {};

    // Salva le modifiche nel database
    await userData.save();

    res.status(201).json({ message: "Ordine effettuato con successo", order });
  } catch (error) {
    console.error("Errore durante la creazione dell'ordine:", error);
    res.status(500).json({
      error: "Si è verificato un errore durante la creazione dell'ordine",
    });
  }
});

// endpoint per gli ordini
app.get("/admin/orders", async (req, res) => {
  try {
    // Recupera tutti gli utenti dal database insieme agli ordini
    const allUsersWithOrders = await Users.find().populate("orderData");

    // Estrai gli ordini e i dettagli dell'utente di ogni utente
    const ordersWithUserDetails = allUsersWithOrders.reduce((orders, user) => {
      // Estrai i dettagli dell'utente
      const userDetails = {
        id: user._id,
        name: user.name,
        email: user.email, // Aggiungi altri dettagli dell'utente se necessario
      };

      // Aggiungi il nome dell'utente a ciascun ordine
      const ordersWithUserName = user.orderData.map((order) => ({
        ...order.toObject(),
        userDetails: userDetails,
      }));

      // Aggiungi gli ordini dell'utente corrente agli ordini totali
      return [...orders, ...ordersWithUserName];
    }, []);

    // Invia la lista degli ordini con i dettagli dell'utente come risposta
    res.status(200).json({ orders: ordersWithUserDetails });
  } catch (error) {
    console.error("Errore durante il recupero degli ordini:", error);
    res.status(500).json({
      error: "Si è verificato un errore durante il recupero degli ordini",
    });
  }
});
// Endpoint per ottenere il nome dell'utente loggato
app.get("/username", fetchUser, async (req, res) => {
  try {
    // Recupera l'ID dell'utente dalle informazioni contenute nel token JWT
    const userId = req.user.id;

    // Trova l'utente nel database
    const user = await Users.findById(userId);

    // Se l'utente è trovato, restituisci il suo nome
    if (user) {
      res.status(200).json({ username: user.name });
    } else {
      res.status(404).json({ error: "Utente non trovato" });
    }
  } catch (error) {
    console.error("Errore durante il recupero del nome dell'utente:", error);
    res.status(500).json({
      error:
        "Si è verificato un errore durante il recupero del nome dell'utente",
    });
  }
});
// Endpoint per ottenere gli ordini dell'utente con nome e email
app.get("/user/orders", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id; // Ottieni l'ID dell'utente loggato

    // Trova l'utente nel database insieme ai suoi ordini
    const userWithOrders = await Users.findById(userId).populate("orderData");

    if (!userWithOrders) {
      return res.status(404).json({ error: "Utente non trovato" });
    }

    // Estrai il nome e l'email dell'utente
    const { name, email } = userWithOrders;

    // Estrai gli ordini dell'utente
    const orders = userWithOrders.orderData;

    // Invia una risposta con gli ordini dell'utente, il nome e l'email
    res.status(200).json({ name, email, orders });
  } catch (error) {
    console.error(
      "Errore durante il recupero degli ordini dell'utente:",
      error
    );
    res.status(500).json({
      error:
        "Si è verificato un errore durante il recupero degli ordini dell'utente",
    });
  }
});
// Endpoint per cancellare un ordine
app.delete("/order/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId; // Ottieni l'ID dell'ordine dalla richiesta

    // Trova e cancella l'ordine dal database utilizzando l'ID fornito
    await Users.updateOne(
      { "orderData._id": orderId },
      { $pull: { orderData: { _id: orderId } } }
    );

    // Invia una risposta JSON di successo
    res.status(200).json({ message: "Ordine cancellato con successo" });
  } catch (error) {
    // Se si verifica un errore durante la cancellazione dell'ordine, invia una risposta con un messaggio di errore
    console.error("Errore durante la cancellazione dell'ordine:", error);
    res.status(500).json({
      error: "Si è verificato un errore durante la cancellazione dell'ordine",
    });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error : " + error);
  }
});
