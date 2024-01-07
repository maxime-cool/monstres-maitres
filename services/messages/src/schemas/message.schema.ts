import S from 'fluent-json-schema'

export const messageCreateSchema = {
    body: S.object()
    .prop('from_id').required()
    .prop('to_id').required()
    .prop('content').required(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object()
}