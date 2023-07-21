
export interface ICheckedPermisssion {
    permissionCode: string,
    type: "view" | 'create' | 'delete'
}

/**
 * @description : example call api check permission and return props to redirect
 */
export async function checkPermission(body: ICheckedPermisssion, token: string | undefined) {
    try {
        if (token === undefined) {
            return { destination: '/login', permanent: true }
        }
        const res = await fetch(`http://171.244.51.26:8085/v1/permission-action/check`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            cache: 'default'
        })
        const response = await res.json();
        if (response.accept === false) {
            return { destination: '/login', permanent: true }
        } else {
            return null
        }
    } catch (e) {
        console.log(e)
        return { destination: '/login', permanent: true }
    }
}
