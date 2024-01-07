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
    const monstreServerUrl = `http://monstre:5004/api/monstres/monstre`;
    const response = await axios.post(monstreServerUrl, monstreData);
    //TODO
    const price = dexResult.base_price;
    const serverUrl = `http://users:5003/api/users/credits/${master_id}`
    await axios.put(serverUrl, {});
}

