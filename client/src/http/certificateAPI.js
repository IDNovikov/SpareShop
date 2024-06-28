import { $authHost, $host } from "./index";





export const createCertificate = async (certi) => {
    const {data} = await $host.post("api/certificate", certi )
    return data
}

export const fetchCertificates = async (page, limit = 5)  => {
    const {data} = await $authHost.get("api/certificates", {params:{page, limit}})
    return data
}


export const deleteCertificate = async (id)  => {
    const {data} = await $authHost.get("api/certificate/"+id)
    return data
}

