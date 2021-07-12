import React,{useState, useEffect} from 'react'
const IpLocal = 'localhost:3200'
const IpVPN = '25.95.109.190:3200'
const IpRemote = 'localhost:3200'
 
export const GetClients = `http://${IpRemote}/clients`
export const GetService = `http://${IpRemote}/services`
export const GetServByClient = `http://${IpRemote}/servicesbyclient/`
export const GetProdByServ = `http://${IpRemote}/productbyservice`
export const GetProducts = `http://${IpRemote}/products`

