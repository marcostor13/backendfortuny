import { Request, Response } from "express";
import * as admin from 'firebase-admin'



export async function create(req: Request, res: Response) {
    try {
        const { listname, uid } = req.body
        const data = {
            name: listname, 
            uid: uid
        }  
        return await admin.firestore().collection('lists').add(data).then(_ => {
            return res.status(200).send({ message: 'Lista creada' })
        })        
    } catch (err) {
        return handleError(res, err)
    }
}

function searchListOnArray(listsArray:any[], listid:string){
    let res = false
    for (let i = 0; i < listsArray.length; i++) {
        const element = listsArray[i]
        if(element.id == listid){
            res = true
        }        
    }
    return res
}

export async function addUpdateInfluencerToList(req: Request, res: Response) {
    try {
        const { influencerid, listid } = req.body

        const snapshotList:any = await admin.firestore().collection('lists').doc(listid).get()
        if (!snapshotList.exists) {
            return res.status(401).send({message: 'Error: No existe la lista'})
        }                   

        const snapshotInfluencer:any =  await admin.firestore().collection('influencers').doc(influencerid).get()

        if (!snapshotInfluencer.exists) {
            return res.status(401).send({ message: 'Error: No existe el influencer' })
        } 
        
        console.log('LISTS', snapshotInfluencer.data().lists)
        let lists = snapshotInfluencer.data().lists

        if(lists){
            if (searchListOnArray(lists, listid) === false){
                lists.push({
                    id: snapshotList.id,
                    data: snapshotList.data()
                })
            }else{
                return res.status(401).send({ message: 'Error: La lista ya existe en el influencer' })
            }
        }else{
            lists = [{
                id: snapshotList.id,
                data: snapshotList.data()
            }]
        }

        const data = {
            lists: lists
        }  
        return await admin.firestore().collection('influencers').doc(influencerid).update(data).then(_ => {
            return res.status(200).send({ message: 'Lista agregada' })
        })
    } catch (err) {
        return handleError(res, err)
    }
}

export async function removeInfluencerToList(req: Request, res: Response) {
    try {
        const { influencerid, listid } = req.params

        const snapshotInfluencer:any = await admin.firestore().collection('influencers').doc(influencerid).get()

        if(!snapshotInfluencer.exists){
            return res.status(200).send({message: 'no existe el influencer'})
        }

        const lists = snapshotInfluencer.data().lists
        let data = {}
        if (lists) {
            if (lists.length != searchAndDeleteListOnArray(lists, listid).length) {
                data = {
                    lists: searchAndDeleteListOnArray(lists, listid)
                }
            }
            console.log(lists)
            console.log(searchAndDeleteListOnArray(lists, listid))
        }          
        return await admin.firestore().collection('influencers').doc(influencerid).update(data).then(_ => {
            return res.status(200).send({ message: 'Lista agregada' })
        })
    } catch (err) {
        return handleError(res, err)
    }
}


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}

export async function all(req: Request, res: Response) {    
    const snapshot = await admin.firestore().collection('lists').get()
    if (snapshot.empty) {
        return res.status(200).send([])
    }
    const results: any = [];
    snapshot.forEach((doc) => {
        results.push({
            id: doc.id,
            data: doc.data()
        });
    });
    return res.status(200).json(results);
}

export async function get(req: Request, res: Response) {
    const { uid } = req.params
    const snapshot = await admin.firestore().collection('lists').where('uid', '==', uid).get()
    if (snapshot.empty) {
        return res.status(200).send([])
    }
    const results: any = [];
    snapshot.forEach((doc) => {
        results.push({
            id: doc.id,
            data: doc.data()
        });
    });
    return res.status(200).json(results);
}


export async function patch(req: Request, res: Response) {
    try {
        const { id } = req.params
        const { name } = req.body
        const data = {
            name: name
        }
        return await admin.firestore().collection('lists').doc(id).update(data).then(_ => {
            return res.status(200).send({ message: 'Lista actualizada' })
        })
    } catch (err) {
        return handleError(res, err)
    }
}


function searchAndDeleteListOnArray(listsArray: any[], listid: string) {
    for (let i = 0; i < listsArray.length; i++) {
        if (listsArray[i].id == listid) {
            listsArray.splice(i, 1)
        }
    }
    return listsArray
}

export async function remove(req: Request, res: Response) {
    try {
        const { id } = req.params       

        const snapshotInfluencers = await admin.firestore().collection('influencer').get()

        if (snapshotInfluencers.empty) {
            return res.status(401).send({ message: 'No hay influencers' })
        }else{
            snapshotInfluencers.forEach(async (doc) => {
                let lists = doc.data().lists
                if (lists){
                    if (lists != searchAndDeleteListOnArray(lists, id)){
                        await admin.firestore().collection('influencers').doc(doc.id).update({
                            lists: searchAndDeleteListOnArray(lists, id)
                        })                                
                    }
                }
            })
            return await admin.firestore().collection('lists').doc(id).delete().then(_ => {
                return res.status(200).send({ message: 'Lista eliminada' })
            })
        }
    } catch (err) {
        return handleError(res, err)
    }
}