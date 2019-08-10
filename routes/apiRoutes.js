const UserProfiles = require("../models/userprofiles");
const Messages = require("../models/messages");
const Connections = require("../models/connections");

module.exports = function(app) {


    //returning a single user's profile
    app.get("/api/userProfiles/:user", (req, res) => {
        const {user} = req.params;
        UserProfiles.findAll({
            where: {
                id: user
            }
        }).then((result)=>{
            return res.json(result);
        })
    });
//returning all messages sent to or from a user
    app.get("/api/messages/:user", (req, res)=>{
        const {user} = req.params;
        Messages.findAll({
            where:{
                userInit: user,
                $or:[
                    {
                        userReceiving:{
                            $eq: user
                        }
                    }
                ]
            }
        }).then((result)=>{
            return res.json(result)
        })
    })

    //updating a connection to accept a request
    app.put("/api/connections/:id", (req, res)=>{
        Connections.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((success)=>{
           return res.json(success);

        })
    })
//deleting a requested connection (declining a request)
app.delete("/api/connections/:id", (req, res)=> {
    Characters.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((result)=> {
       return res.json(result);
      });
  });


//creating a new message in the database
app.post("/api/connections",(req, res)=>{
    const {userInitiating, userReceiving } = req.body;
    Connections.create({
        userInitiating: userInitiating,
        userReceiving: userReceiving,
        accepted: false
    },
    {
        timestamps: false,
        freezeTableName: true
    }).then((results)=>{
        return res.json(results);
    })
})
//returning all accepted connections. may need to chain this either w/in sql or in clientside js to pull the rest of the accepted users' info
    app.get("/api/connections/accepted", (req, res)=>{
        const {userId,} = req.body;
        Connections.findAll({
            where:{
                accepted: true,
                userInitiating: userId,
                $or:[
                    {
                        userReceiving:{
                            $eq: userId
                        }
                    }
                ]
            }
        }). then((result)=>{
            return res.json(result);
        })
    })

    //return all requested connections which the user has received
    app.get("api/connections/pending", (req, res)=>{
        const userId = req.body;
        Connections.findAll({
            where:{
                accepted: false,
                userReceiving: userId
            }
        }).then((results)=>{
            return res.json(results);
        })
    })

    //searching the database for users which match the below requirements-- will add more requirements once basic routes have been proven to work
    app.get("/api/search", (request, response)=> {
       const {organic} = request.body;
        UserProfiles.findAll({
            where:{
                organic: organic
            }
        }).then((result)=>{
            return res.json(result);
        })
    });

    //creating a new user. on the clientside JS we need to have a way to save the current user for future queries (after logging in, we need userauth persistence.)
    app.post("/api/userProfiles/newUser", (req, res)=>{
const {firstName, lastName, email, location, geocode, password, image, avatar, intro, hasGarden, availableTime, organic, flowers, tomatoes, cucumbers, sweetPeppers, beans, peas, carrots, squash, lettuce, watermelon, onion, sweetCorn, cabbage, potatoes, radishes, mint, basil, cilantro, beets, zucchini, broccoli, other} = req.body;
UserProfiles.create({
    firstName:firstName,
    lastName: lastName,
    email: email,
    location: location,
    geocode: geocode,
    password: password,
    image: image,
    avatar: avatar,
    intro: intro,
    hasGarden: hasGarden,
    availableTime: availableTime,
    organic: organic,
    flowers: flowers,
    tomatoes: tomatoes,
    cucumbers: cucumbers,
    sweetPeppers: sweetPeppers,
    beans: beans,
    peas: peas,
    carrots: carrots,
    squash: squash,
    lettuce: lettuce,
    watermelon: watermelon,
    onion: onion,
    sweetCorn: sweetCorn,
    cabbage: cabbage,
    potatoes: potatoes,
    radishes: radishes,
    mint: mint,
    basil: basil,
    cilantro: cilantro,
    beets: beets,
    zucchini: zucchini,
    broccoli: broccoli,
    other: other
},
{
    timestamps: false,
    freezeTableName: true
}).then((results)=>{
    res.json(results);
})
    })

//updating a user's profile
app.put("/api/userProfiles/:user", (req, res)=>{
    UserProfiles.update(req.body,{
        where: {
            id: req.params.id
        }
    }).then((success)=>{
        return res.json(success);
    })
})

//deleting a user's profile:
app.delete("/api/userProfiles/:user", (req, res)=>{
    UserProfiles.destroy(req.body, {
        where:{
            id: req.params.id
        }
    }).then((result)=>{
        return res.json(result);
    })
})

};