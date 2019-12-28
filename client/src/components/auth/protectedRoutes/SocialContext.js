// import React, { createContext, useState } from 'react'

// export const SocialContext = createContext()

// export const SocialProvider = (props) => {
//     const [socialList, setSocialList] = useState({
//         id: '',
//         listLinkName: '',
//         listLink: ''
//     })
//     useEffect(async () => {
//         try {
//             const config = {
//                       headers: {
//                         "Content-Type": "application/json",
//                         "x-auth-token": `${token}`
//                       }}
//                     const socialList = await Axios.get('/api/social', config)
//                     const parseSocialList = JSON.parse(socialList)              
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server Error')
// }, [socialList]})
// setSocialList(...socialList, [
//     {
//         listLinkName: parseSocialList.lists.linkName
//     },
//     {
//         listLink: parseSocialList.lists.link
//     },
//     {
//         id: parseSocialList.lists._id
//     }
// ])      
//     return (
//         <SocialContext.Provider value={[socialList, setSocialList]}>
//             {props.children}
//         <SocialContext.Provider/>
//     )
// }
