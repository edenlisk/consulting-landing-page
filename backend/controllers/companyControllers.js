import Company from "../models/company.js";
import {isValidObjectId} from "mongoose";
import {graphQlError} from '../utils/helperFunctions.js';

export async function createCompany({ name, logo, address: { country, province, district, sector, street, mapCoords } }) {
    // const { name, logo, address: { country, province, district, sector, street, mapCoords } } = req.body;
    const self = await Company.create(
        {
            name,
            logo,
            address: {
                country,
                province,
                district,
                sector,
                street,
                mapCoords
            }
        }
    )
    if (!self) throw graphQlError('Unable to add company info', 'UNKNOWN_ISSUES');
    return self;
}

export async function updateCompany({ companyId, name, logo, address: { country, province, district, sector, street, mapCoords } }) {
    if (!isValidObjectId(companyId)) throw graphQlError('Invalid objectId', 'INVALID_INPUT')
    const existingCompany = await Company.findById(companyId);
    if (!existingCompany) throw graphQlError('Unable to find existing company info', 'INVALID_INPUT');
    if (name) existingCompany.name = name;
    if (logo) existingCompany.logo = logo;
    if (country) existingCompany.address.country = country;
    if (province) existingCompany.address.province = province;
    if (district) existingCompany.address.district = district;
    if (sector) existingCompany.address.sector = sector;
    if (street) existingCompany.address.street = street;
    if (mapCoords) existingCompany.address.mapCoords = mapCoords;
    return await existingCompany.save({validateModifiedOnly: true});
}

export async function getCompany({companyId}) {
    const company = await Company.findById(companyId);
    if (!company) throw graphQlError('Unable to find company info', 'INVALID_INPUT');
    return company;
}