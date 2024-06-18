import Company from "../models/company.js";
import {addPhoto, graphQlError} from '../utils/helperFunctions.js';
import Gallery from "../models/gallery.js";

export async function createCompany({ socials, aboutUs, ourMission, companyOverview, phoneNumber, email, name, file, address: { country, province, district, sector, street, mapCoords } }) {
    const self = new Company(
        {
            name,
            socials,
            ourMission,
            aboutUs,
            companyOverview,
            phoneNumber,
            email,
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
    if (file) {
        const { fileId, url } = await addPhoto({file, category: '/user-profiles'});
        if (fileId || url) {
            const addedPhoto = await Gallery.create(
                {
                    fileId,
                    filePath: url,
                    year: new Date().getFullYear(),
                    description: `company_logo`,
                    showInGallery: false
                }
            )
            if (addedPhoto) {
                self.logo = addedPhoto._id;
            }
        }
    }
    return await self.save({validateModifiedOnly: true});
    // if (!newSelf) throw graphQlError('Unable to add company info', 'UNKNOWN_ISSUES');
    // return newSelf;
}

export async function updateCompany({ file, aboutUs, ourMission, companyOverview, email, phoneNumber, name, address: { country, province, district, sector, street, mapCoords } }) {
    const existingCompany = await Company.findOne().populate('logo');
    if (!existingCompany) throw graphQlError('Unable to find existing company info', 'INVALID_INPUT');
    if (aboutUs) existingCompany.aboutUs = aboutUs;
    if (ourMission) existingCompany.ourMission = ourMission;
    if (companyOverview) existingCompany.companyOverview = companyOverview;
    if (phoneNumber) existingCompany.phoneNumber = phoneNumber;
    if (email) existingCompany.email = email;
    if (name) existingCompany.name = name;
    if (country) existingCompany.address.country = country;
    if (province) existingCompany.address.province = province;
    if (district) existingCompany.address.district = district;
    if (sector) existingCompany.address.sector = sector;
    if (street) existingCompany.address.street = street;
    if (mapCoords) existingCompany.address.mapCoords = mapCoords;
    if (file) {
        const { fileId, url } = await addPhoto({file, category: '/user-profiles'});
        if (fileId || url) {
            const addedPhoto = await Gallery.create(
                {
                    fileId,
                    filePath: url,
                    year: new Date().getFullYear(),
                    description: 'company_logo',
                    showInGallery: false
                }
            )
            if (addedPhoto) existingCompany.logo = addedPhoto._id;
        }
    }
    return await existingCompany.save({validateModifiedOnly: true});
}

export async function getCompany() {
    const company = await Company.findOne().populate('logo');
    if (!company) throw graphQlError('Unable to find company info', 'INVALID_INPUT');
    return company;
}