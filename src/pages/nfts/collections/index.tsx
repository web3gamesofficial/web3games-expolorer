import Header from "../../../components/header";
import React  from "react";
import NFTHeader from "../../../components/NFT-header";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const title=[
    {
        title:"#"
    },
    {
        title:"Collection"
    },
    {
        title:"Items"
    },
    {
        title:"attributes"
    },
    {
        title:"Floor Price(W3G)"
    },
    {
        title:"Volume 24h(W3G)"
    },
    {
        title:"Last Trade "
    },
    {
        title:"Traded on"
    },
]
const collections=[
    {
        id:"1",
        img:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        name:"Magic Ticket: Normie",
        href:"",
        items:"507",
        attributes:"2",
        floorattributes:"1.25",
        volume:"4,488,69",
        lasttrade:"20 minutes ago",
        traded:[
            {
                id:"1",
                href:"",
                img:"https://solscan.io/static/media/logo-magiceden.c03f39c4.png"
            },


        ]
    },
    {
        id:"1",
        img:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        name:"Magic Ticket: Normie",
        href:"",
        items:"507",
        attributes:"2",
        floorattributes:"1.25",
        volume:"4,488,69",
        lasttrade:"20 minutes ago",
        traded:[
            {
                id:"1",
                href:"",
                img:"https://solscan.io/static/media/logo-magiceden.c03f39c4.png"
            },


        ]
    },
    {
        id:"1",
        img:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        name:"Magic Ticket: Normie",
        href:"",
        items:"507",
        attributes:"2",
        floorattributes:"1.25",
        volume:"4,488,69",
        lasttrade:"20 minutes ago",
        traded:[
            {
                id:"1",
                href:"",
                img:"https://solscan.io/static/media/logo-magiceden.c03f39c4.png"
            },


        ]
    },
    {
        id:"1",
        img:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        name:"Magic Ticket: Normie",
        href:"",
        items:"507",
        attributes:"2",
        floorattributes:"1.25",
        volume:"4,488,69",
        lasttrade:"20 minutes ago",
        traded:[
            {
                id:"1",
                href:"",
                img:"https://solscan.io/static/media/logo-magiceden.c03f39c4.png"
            },


        ]
    },


]

const Collections=()=>{
    return(
        <div className="mx-auto bg-gray-50 dark:bg-current  transition duration-700">
            <Header></Header>
            <div className="max-w-7xl mx-auto py-16  px-4 ">
                <div className="my-20 mb-14">
                    <NFTHeader></NFTHeader>
                    <div className="bg-white p-5 rounded-lg mt-2">
                        <div className="mt-5">
                            <div className="shadow overflow-auto border-b  border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100 dark:bg-gray-300">
                                    <tr>
                                        {title.map(title=>(
                                            <th key={title.title}
                                                scope="col"
                                                className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                                            >
                                                {title.title}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-300 divide-y divide-gray-200">
                                    {collections.map(item=>(
                                        <tr key={item.id} className="hover:bg-gray-200" >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  ">
                                                {item.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400 font-medium flex">
                                                <a href={item.href} className="flex">
                                                    <img className="-ml-2 w-8 h-8 rounded-full"
                                                         src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" alt=""/>
                                                    <div className="mt-2 ml-2">
                                                        {item.name}
                                                    </div>
                                                </a>
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                                                {item.items}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.attributes}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.floorattributes}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                                {item.volume}
                                            </td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                                <div>
                                                {item.lasttrade} <a href="" className="text-blue-400">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex">
                                                {item.traded.map(item=>(

                                                    <a key={item.id} href={item.href} className="mr-.05">
                                                <img className="w-8 h-8 rounded-lg" src={item.img} alt=""/></a>
                                                ))}
                                            </td>

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>



                </div>

            </div>

        </div>
    )

}
export default Collections