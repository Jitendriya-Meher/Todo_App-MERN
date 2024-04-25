
const adminMiddleware = async ( req, res, next ) => {

    try{

        if( req.isAdmin === false ){
            return res.json({
                message: "this user is not a admin",
                success: false
            });
        }

        next();
        
    }
    catch( err ){
        return res.json({
            success: false,
            message: err.message
        });
    }
}

module.exports = {adminMiddleware};