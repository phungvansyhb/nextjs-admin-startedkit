// import { PermissionAction } from '@/shared/schema/models/IAppUser';
import {Ability, AbilityBuilder} from '@casl/ability'

type Actions = 'create' | 'view' | 'delete';
export default function AbilityConfig(permissions?: any) {
    const { can, build } = new AbilityBuilder(Ability<[Actions, any]>);
    if (permissions) {
        permissions.filter((item: any) => item.active && item.permissionCode).forEach((per:any) => can(per.action.toLowerCase() as Actions, per.permissionCode));
    }
    return build();
}
