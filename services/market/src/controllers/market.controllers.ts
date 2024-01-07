import { FastifyReply, FastifyRequest } from "fastify";
import axios from 'axios';

export const buyMonster = async (request: FastifyRequest, reply: FastifyReply) => {

    let obj: any = request.body;
    const {
        name,
        dex_ref,
        master_id,
        team_id
    } = obj;
    const dexServerUrl = `http://monstredex:5006/api/dex/get_monster/${dex_ref}`;
    const dex = await axios.get(dexServerUrl);
    const dexResult = dex.data[0];
    let monstreData = {
        name : name,
        dex_ref : dex_ref,
        description : dexResult.description,
        power: dexResult.base_power,
        master_id: master_id,
        team_id : team_id
    };
    const creditUser = await axios.get(`http://users:5003/api/users/credits/${master_id}`);
    const price = creditUser.data[0].credits - dexResult.base_price;
    if (price >=0) {
        const serverUrl = `http://users:5003/api/users/credits/${master_id}`
        await axios.put(serverUrl, { credits : price});
        const monstreServerUrl = `http://monstre:5004/api/monstres/monstre`;
        await axios.post(monstreServerUrl, monstreData);
    }
    else {
        console.error('Error : not enough credits to buy monster');
    }
}

