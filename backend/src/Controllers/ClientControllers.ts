import dotenv from "dotenv";
import { v4 as uid } from "uuid";
import bcrypt from "bcrypt";
import { Request, RequestHandler, Response } from "express";
import { sqlConfig } from "../Config/Config";
import jwt from "jsonwebtoken";
import Connection from "../DatabaseHelpers/db";
import { Client, Data } from "../Interfaces/interfaces";
import {
  ClientSchemaLog,
  ClientSchemaReg,
} from "../Validators/ClientValidator";
const db = new Connection();

dotenv.config();
interface Extended extends Request {
  info?: Data;
}

interface ExtendedRequest extends Request {
  body: {
    name: string;
    email: string;
    contact: string;
    password: string;
  };
}

export const registerClient = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid();
    let { name, email, contact, password } = req.body;
    const { error, value } = ClientSchemaReg.validate(req.body);
    if (error) {
      res.status(401).json({ error: error.details[0].message });
    }
    const client_id = id;
    password = await bcrypt.hash(password, 10);
    const result=await db.exec('getClient',{email})
    const{recordset}=result
    if (recordset.length > 0) {
        return res
          .status(400)
          .send({ message: "Email Already Exists!", success: false });
      }

    db.exec("insertClient", { client_id, name, email, contact, password });

    res.status(201).json({ message: "Client added successfully" });
  } catch (error) {
    res.status(400).send("An Error Occurred!");
  }
};
export const loginClient = async (req: ExtendedRequest, res: Response) => {
  try {
    let { name, email, contact, password } = req.body;
    const { error, value } = ClientSchemaLog.validate(req.body);
    if (error) {
      res.status(401).json({ error: error.details[0].message });
    }
    const client: Client[] = (await db.exec("getClient", { email })).recordset;
    if (!client[0]) {
      res.status(404).send("Client Not Found!");
    } else {
      const validPassword = await bcrypt.compare(password, client[0].password);
      if (!validPassword) {
        return res.status(401).send("Invalid Password!");
      }
      const payload = client.map((item) => {
        const { password, ...rest } = item;
        return rest;
      });

      const token = jwt.sign(payload[0], process.env.KEY as string, {
        expiresIn: "3600000s",
      });
      return res
        .status(200)
        .json({
          message: "Client Logged In Successfully!",
          token,
          role: client[0].role,
          name: client[0].name,
          client_id:client[0].client_id,
          email:client[0].email
        });
    }
  } catch (error) {
    res.status(400).send("An Error Occurred!");
  }
};

export const getClients: RequestHandler = async (req, res) => {
  try {
    const clients = await db.exec("getClients");
    res.status(200).json(clients.recordset);
  } catch (error) {
    res.status(400).send("An Error Occurred!");
  }
};
export const getClientById: RequestHandler<{ client_id: string }> = async (
  req,
  res
) => {
  try {
    const client_id = req.params.client_id;
    const { recordset } = await db.exec("getClientById", { client_id });
    if (!recordset[0]) {
      res.status(404).send("Client Not Found!");
    } else {
      res.status(200).json(recordset);
    }
  } catch (error) {
    res.status(400).send("An Error Occurred!");
  }
};
export const getName:RequestHandler<{email:string}>=async(req,res)=>{
  try {
    const email=req.params.email

    const {recordset}=await db.exec("getName",{email})
    
    if (!recordset[0]) {
      res.status(404).send("Client Not Found!");
    } else {
      res.status(200).json(recordset[0].name);
    }
    
  } catch (error) {
    res.json({error})
    
  }

}