// import { Request, Response } from "express";
// // import axios from "axios";

// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname + '\\.env' });

// // const ig = require('instagram-node').instagram();



// const access_token = 'IGQVJVeDBsSzc3djhzTmR2NHNBbXRvWVhjeVdqYU15UHlmak9IUno1MkpvRXVjcU53R2lEMGIyQ1RzZAVR4Y1FQb012R2Q0dno4eEtiUURGd2MwZA0dmcWZAELTZAWR2JXTDgyR0J1MnkzZAllESGh2SFZAkdDBtSGpfeHZAqazJB'
// const client_secret = 'b1762d4bbf4893b3a32720cb98ff3f2e'
// const client_id = '3502380656461115'
// const redirect_uri = 'https://us-central1-fortuny-2020.cloudfunctions.net/webApi'

// // const instagram = new Instagram({
// //     clientId: client_id,
// //     clientSecret: client_secret,
// //     accessToken: access_token,
// // });


// // ig.use({ access_token: 'IGQVJVeDBsSzc3djhzTmR2NHNBbXRvWVhjeVdqYU15UHlmak9IUno1MkpvRXVjcU53R2lEMGIyQ1RzZAVR4Y1FQb012R2Q0dno4eEtiUURGd2MwZA0dmcWZAELTZAWR2JXTDgyR0J1MnkzZAllESGh2SFZAkdDBtSGpfeHZAqazJB' });
// // ig.use({
// //     client_id: client_id,
// //     client_secret: client_secret
// // });

// export async function test(req: Request, res: Response) {    


//     // const {id} = req.body

//     // const url = new URL('https://graph.instagram.com/marcostor13')

//     // // url.searchParams.set('client_id', client_id)
//     // // url.searchParams.set('redirect_uri', redirect_uri)
//     // // url.searchParams.set('scope', 'user_profile,user_media')
//     // // url.searchParams.set('response_type', 'code')
//     // url.searchParams.set('fields', 'account_type,id,ig_id,media_count,username')
//     // url.searchParams.set('access_token', access_token)

//     // // return res.status(200).send({ message: url.toString()})
       
    

//     // axios.get(url.toString()).then((result:any)=>{
//     //     console.log(result.data)
//     //     return res.status(200).send({ message: result.data})
//     // }).catch((err:any) =>{
//     //     console.log(err)
//     //     return handleError(res, err)
//     // })

//     // const data = {
//     //     client_id: client_id,
//     //     client_secret: client_secret,
//     //     grant_type:'authorization_code',
//     //     redirect_uri: redirect_uri,
//     //     code: AUTHCODE
//     // }

//     // axios.post(url.toString(), data).then((result:any)=>{
//     //     console.log(url)
//     //     return res.status(200).send(res)
//     // }).catch((err:any) =>{
//     //     console.log(err)
//     //     return handleError(res, err)
//     // })

    

//     // ig.user_search('marcostor13', { count: 10 }, (err: any, users:any, remaining:any, limit:any) => {
//     //     console.log('result', err)
//     //     // console.log('err', err)
//     //     // console.log('remaining', remaining)
//     //     // console.log('limit', limit)

//     //     return res.status(500).send(err.status_code)
//     //  });

    


// }


// function handleError(res: Response, err: any) {
//     return res.status(500).send({ message: `${err.code} - ${err.message}` });
// }
