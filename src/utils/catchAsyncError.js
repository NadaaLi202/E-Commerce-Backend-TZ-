export default function catchError(fun){

    return (req,res,next) => {

        fun(req,res,next).catch( (err) => {

            // res.status(500).json({message: "error occurred", err})
            next(err)
        })

    }
}