const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BLLAccount = require('../BLL/BLLAccount')
passport.use(new LocalStrategy(async (username, password, done) => {
    
    try {
        console.log(username,password);
        let user = await BLLAccount.mySingleton.getInstance().checkLogin(username, password)
        
        if (user != undefined) done(null, user)
       
    } catch (error) {
        done(error)
      
    }
}))
