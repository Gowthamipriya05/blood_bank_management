const express=require("express");
const mysql=require('mysql');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"finalbloodbank"
});


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO Donar (`D_fname`,`D_lname`,`D_contact`,`D_password`,`D_age`,`D_address`,`D_email`,`D_blood_group`,`D_gender`) VALUES (?)";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.contact,
        req.body.password,
        req.body.age,
        req.body.address,
        req.body.email,
        req.body.bloodgroup,
        req.body.gender
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('MySQL Error:', err.message); // Log the MySQL error message
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });    
});


app.post('/logindonar',(req,res)=> {
    const sql= "SELECT * FROM donar WHERE `D_id`=? AND `D_contact`=? AND `D_password`=?";
    const values=[
        req.body.donarid,
        req.body.contact,
        req.body.password
    ];
    db.query(sql, values, (err,data)=> {
        if(err){
            console.error('MYSQL Error:',err.message);
            return res.status(500).json({error:'Internal Server Error'});
        }
        if(data.length>0)
        return res.json("Success");
        else return res.json("Failure");
    });
});


app.post('/loginpatient', (req, res) => {
    const sql = "INSERT INTO Patient (`P_id`,`P_name`,`P_age`,`P_contact`,`P_password`) VALUES (?)";

    const values = [
        req.body.patientid,
        req.body.name,
        req.body.age,
        req.body.contact,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('MySQL Error:', err.message); // Log the MySQL error message
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });    
});


app.post('/loginadmin',(req,res)=> {
    const sql= "SELECT * FROM Employee WHERE `E_id`=? AND `E_name`=? AND `E_contact`=? AND `E_password`=? ";
    const values = [
        req.body.adminid,
        req.body.name,
        req.body.contact,
        req.body.password
    ];
    db.query(sql, values, (err,data)=> {
        if(err){
            console.error('MYSQL Error:',err.message);
            return res.status(500).json({error:'Internal Server Error'});
        }
        if(data.length>0)
        return res.json("Success");
        else return res.json("Failure");
    });
});

app.post('/insertbloodgroups', (req, res) => {
    const sql = "INSERT INTO blood_bank (`Bb_name`,`Bb_location`,`Bb_contact`,`Avail_bloods`,`Quantity`,`Price`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.address,
        req.body.contact,
        req.body.bloodgroup,
        req.body.quantity,
        req.body.price
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('MySQL Error:', err.message); // Log the MySQL error message
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });    
});

app.get('/getBloodBanks', (req, res) => {
    const sql = "SELECT * FROM Blood_Bank";
    db.query(sql, (err, result) => {
      if (err) {
        console.error('MySQL Error:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      return res.json(result);
    });
  });

  app.delete('/deletebloodbank/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Blood_Bank WHERE Bb_id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('MySQL Error:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      return res.json({ message: 'Row deleted successfully' });
    });
  });
  
app.listen(8081,()=>{
    console.log("listening");
})

