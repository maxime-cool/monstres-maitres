import S from 'fluent-json-schema'

export const matchmakingCreateSchema = {
    body: S.object()
    .prop('p1').required()
    .prop('open').required(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object()
}