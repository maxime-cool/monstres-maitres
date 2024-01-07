import S from 'fluent-json-schema'

export const monstreCreateSchema = {
    body: S.object()
    .prop('dex_ref').required()
    .prop('name').required()
    .prop('description').required()
    .prop('power').required()
    .prop('master_id').required()
    .prop('team_id').required(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object()
}